const mongoose = require("mongoose");
const { DB_NAME } = require("../constant");

const connectDB = async() => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`).then(() => {
      // console.log(`MONGODB connection success`);
    }).catch(err => {
      console.error(`MONGO connect failed: ${err}`);
    })
  } catch (error) {
    console.error(`MONGODB connection failed: ${error}`);
  }
}

module.exports = {connectDB}