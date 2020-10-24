const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    content: {
        type: String
    }
})

module.exports = Posts =  mongoose.model('Post', postSchema)