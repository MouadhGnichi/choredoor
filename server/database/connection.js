const mongoose = require('mongoose')
const connectDB = async () => {
  try {
    // mongobd connection string
    mongoose.connect("mongodb+srv://choredoor:choredoor123@cluster0.x5wj5.mongodb.net/test", {
      useNewUrlParser: true
    })
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
}
module.exports = connectDB
