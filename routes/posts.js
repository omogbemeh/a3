const express = require('express')
const router = express.Router();
const Posts = require('../models/Post')

router.get('/', async (req, res) => {
    try {
        const posts = await Posts.find()
        res.json(posts)
    } catch (err) {
        console.log(err.message);
    }
})

module.exports = router