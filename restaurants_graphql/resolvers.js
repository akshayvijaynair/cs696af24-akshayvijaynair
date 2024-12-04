import db from "./db/connection.js";
const resolvers = {
    Query: {
        async restaurant(_, { restaurant_id }) {
            let collection = await db.collection("restaurants");
            let query = { restaurant_id: restaurant_id };
            return await collection.findOne(query);
        },
    },
    Mutation: {
        async createRestaurant(_, { restaurant_id, name, borough, cuisine }, context) {
            let collection = await db.collection("restaurants");
            const insert = await collection.insertOne({
                restaurant_id: restaurant_id, name: name, borough: borough, cuisine: cuisine });
            if (insert.acknowledged) return { restaurant_id, name, borough, cuisine };
            return null;
        },
        async deleteRestaurant(_, { restaurant_id }, context) {
            let collection = await db.collection("restaurants");
            const dbDelete = await collection.deleteOne({
                restaurant_id: restaurant_id
            });
            return dbDelete.acknowledged && dbDelete.deletedCount == 1 ? true : false;
        },
    },
};
export default resolvers;
