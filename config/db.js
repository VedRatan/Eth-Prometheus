require("dotenv").config()
const mongoose = require("mongoose")

const connect =  async() => {
    mongoose
        .connect(process.env.MONGODB_URI, ()=>{
            console.log("Connected to MongoDB database!!")
        })
        .catch((err) => {
            console.log("Error in connecting to MongoDB: ", err)
        })
}

connect()