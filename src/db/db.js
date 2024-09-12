import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";



const connectDb = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`)
        console.log(`\n Mongo Db connected !! ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("Mongo Db Connection error : ", error);
        process.exit(1);
    }
}

export default connectDb;