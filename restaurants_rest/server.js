import express from "express";
import cors from "cors";
import db from "./db/connection.js";
import redisClient from "./db/redis.js";
import messageQueue from "./db/bull.js";
const PORT = process.env.PORT || 8000;
const app = express();
app.use(cors());
app.use(express.json());

app.get('/restaurants/:id', async function(req, res) {
    const restaurant_id = req.params["id"];
    const value = await redisClient.get(restaurant_id);
    if (value) {
        res.send({"cached": true, "value": JSON.parse(value)});
    } else {
        const dbValue = await db.collection("restaurants").findOne({
            restaurant_id: restaurant_id,
        });
        if (dbValue) {
            await redisClient.set(restaurant_id, JSON.stringify(dbValue));
            res.send({"cached": false, "value": dbValue});
        } else {
            res.status(500).send("Not Found");
        }
    }
});

app.put('/restaurants/:id', async function(req, res) {
    const restaurant_id = req.params["id"];
    const updates = req.body["updates"];
    messageQueue.add({
        restaurant_id: restaurant_id,
        updates: JSON.stringify(updates)
    });
    res.send("Message Queued");
});

app.get('/restaurants', function (req, res) {
    const { borough, cuisine } = req.query;
    const capitalizeFirstLetter = (string) => {
        if (!string) return '';
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    };

    if (!borough || !cuisine) {
        return res.status(400).json({ error: 'Bad Request. Missing Parameters' });
    }

    db.collection('restaurants')
        .find({ borough: borough, cuisine: cuisine })
        .toArray()
        .then(restaurants => {
            if (restaurants.length > 0) {
                return res.json(restaurants);
            }

            db.collection('restaurants')
                .find({
                    borough: capitalizeFirstLetter(borough),
                    cuisine: capitalizeFirstLetter(cuisine) })
                .toArray()
                .then(capitalizedRestaurants => {
                    if (capitalizedRestaurants.length > 0) {
                        return res.json(capitalizedRestaurants);
                    }

                    return res.status(404).json({ error: 'No restaurants found for the specified borough and cuisine.' });
                })
                .catch(error => res.status(500).json({ error: `An error occurred during capitalization query: ${error.message}` }));
        })
        .catch(error => res.status(500).json({ error: `An error occurred: ${error.message}` }));
});

app.post('/restaurants', function(req, res) {
    const restaurant_id = req.body['restaurant_id'];
    const name = req.body['name'];
    const borough = req.body['borough'];
    const cuisine = req.body['cuisine'];
    db.collection("restaurants").insertOne({
        restaurant_id: restaurant_id,
        name: name,
        borough: borough,
        cuisine: cuisine
    }).then(result => result.acknowledged ?
        res.send({restaurant_id, name, borough, cuisine}) :
        res.status(500).send("Failed")
    ).catch(() => res.status(500).send("Failed"));
});


app.delete('/restaurants/:id', async function(req, res) {
    const restaurant_id = req.params["id"];
    const redisExists = await redisClient.get(restaurant_id);
    if (redisExists) {
        await redisClient.del(restaurant_id);
        console.log(`Deleted restaurant with ID ${restaurant_id} from cache`);
    }

    db.collection("restaurants").deleteOne({
        restaurant_id: restaurant_id,
    }).then((result) => {
        result.acknowledged && result.deletedCount >= 1 ? res.send("Success"): res.status(500).send("Failed")
        }).catch(() => res.status(500).send("Not Found"));
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
