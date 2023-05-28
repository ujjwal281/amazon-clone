const mongoose = require('mongoose');
const MONGO_URL = "mongodb://localhost:27017/amazon_clone"

const connectToMongo = () => {
    mongoose.set("strictQuery", false);
    mongoose.connect(MONGO_URL ,  () => {
    console.log("Connected to MongoDB");
    });
}

module.exports = connectToMongo;