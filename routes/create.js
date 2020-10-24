const express = require('express');
const router = express.Router();
const Posts = require('../models/Post')

router.post('/', async (req, res) => {
    try {
        const { content } = req.body
        const newPost = new Posts({
            content,
        })
        const post = await newPost.save();
        res.json(post)
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error')
    }
})

module.exports = router