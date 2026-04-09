import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {
    try {
        const mongodbUri = process.env.MONGODB_URI?.trim();
        const dbName = DB_NAME?.trim();
        console.log("MONGODB_URI:", mongodbUri);
        console.log("DB_NAME:", dbName);
        
        // Handle cases where URI may or may not have trailing slash
        const baseUri = mongodbUri?.endsWith('/') ? mongodbUri : mongodbUri + '/';
        const connectionString = `${baseUri}${dbName}`;
        console.log("Full connection string:", connectionString);
        
        const connectionInstance = await mongoose.connect(connectionString)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1)
    }
}

export default connectDB