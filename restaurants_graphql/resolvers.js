import db from "./db/connection.js";
const resolvers = {
    Query: {
        async restaurant(_, { restaurant_id }) {
            let collection = await db.collection("restaurants");
            let query = { restaurant_id: restaurant_id };
            return await collection.findOne(query);
        },
        async restaurants(_, { borough, cuisine }) {
            let collection = await db.collection("restaurants");
            let query = { borough: borough, cuisine: cuisine };
            const capitalizeFirstLetter = (string) => {
                if (!string) return '';
                return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
            };

            if (!borough || !cuisine) {
                throw new Error('Bad Request. Missing Parameters' );
            }

            const results = await collection.find(query).toArray();

            if (results.length >0) {
                return results;
            } else {
                query = {
                    borough: capitalizeFirstLetter(borough),
                    cuisine: capitalizeFirstLetter(cuisine)
                };
                const recheck = await collection.find(query).toArray();
                if (recheck.length === 0) {
                    throw new Error('Nothing found' );
                } else {
                    return recheck;
                }
            }
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
