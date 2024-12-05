import { MongoClient } from 'mongodb';
import Queue from 'bull';
import 'dotenv/config';

const uri = process.env.MONGO_CONN;
const client = new MongoClient(uri);
async function run() {
    const messageQueue = new Queue('messageQueue');
    messageQueue.process(async (job) => {
        console.log('Processing : ' + job.id);
        const database = client.db('sample_restaurants');
        const restaurants = database.collection('restaurants');
        const query = { restaurant_id: job.data.restaurant_id };
        await restaurants.updateOne(
            query,
            {$set: JSON.parse(job.data.updates)},
            {upsert: true}
        );
        console.log('Processed: ' + JSON.stringify(job.data));
    });
}
run().catch(console.dir);
