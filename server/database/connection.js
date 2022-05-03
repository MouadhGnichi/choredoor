
const mongoose = require('mongoose')
const connectDB = async () => {
  try {
    // mongobd connection string
    mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    })

    console.log('MongoDB connected:@cluster0.pth3n.mongodb.net')
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
}
module.exports = connectDB
