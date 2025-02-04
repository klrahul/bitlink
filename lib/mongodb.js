import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI; // Your MongoDB connection string
const options = {};

if (!uri) {
    throw new Error("Please add your Mongo URI to .env.local");
}

let client = null;
let clientPromise = null;

if (process.env.NODE_ENV === "development") {
    // In development, use a global variable to preserve the client across hot-reloads
    if (!global._mongoClientPromise) {
        client = new MongoClient(uri, options);
        global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
} else {
    // In production, it's safe to create a single client
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
}

export default clientPromise;
