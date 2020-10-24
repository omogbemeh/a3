const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongouri')

const connectDb =  async () => {
    try {
        await mongoose.connect(db, { useNewUrlParser: true , useUnifiedTopology: true});
        console.log('Database is running');
    } catch (err) {
        console.log(err.message);
    }
}

module.exports = connectDb