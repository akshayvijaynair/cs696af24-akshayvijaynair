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

        try {
            if (JSON.parse(job.data.updates) === "delete") {
                const deleteResult = await restaurants.deleteOne(query);
                if (deleteResult.acknowledged && deleteResult.deletedCount > 0) {
                    console.log(`Deleted restaurant_id: ${job.data.restaurant_id}`);
                } else {
                    console.log(`No document found: ${job.data.restaurant_id}`);
                }
            }  else {
                await restaurants.updateOne(
                    query,
                    { $set: JSON.parse(job.data.updates) },
                    { upsert: true }
                );
                console.log('Updated document: ' + JSON.stringify(job.data));
            }
        } catch (error) {
            console.error(`Error processing job ${job.id}:`, error);
        }
    });
}

run().catch(console.dir);
