import express from "express";
import cors from "cors";
import db from "./db/connection.js";
const PORT = process.env.PORT || 8000;
const app = express();
app.use(cors());
app.use(express.json());
app.get('/restaurants/:id', function(req, res) {
    const restaurant_id = req.params["id"];
    db.collection("restaurants").findOne({
        restaurant_id: restaurant_id,
    })
        .then(value => res.send(value))
        .catch((reason) => res.status(500).send(`Not Found ${reason}`));
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

app.get('/restaurants/:id', function(req, res) {
    const restaurant_id = req.params["id"];
    db.collection("restaurants").findOne({
        restaurant_id: restaurant_id,
    })
        .then(value => res.send(value))
        .catch((reason) => res.status(500).send(`Not Found ${reason}`));
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


app.delete('/restaurants/:id', function(req, res) {
    const restaurant_id = req.params["id"];
    db.collection("restaurants").deleteOne({
        restaurant_id: restaurant_id,
    }).then(result => result.acknowledged && result.deletedCount >= 1 ?
        res.send("Success") :
        res.status(500).send("Failed")
    ).catch(() => res.status(500).send("Not Found"));
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
