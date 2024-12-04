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
