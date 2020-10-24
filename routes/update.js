const express = require('express');
const Posts = require('../models/Post');
const router = express.Router();

router.patch('/update-post', async (req, res) => {
    try {
        const post = await Posts.findByIdAndUpdate(req.body.id, req.body, { new: true})
        if (!post) res.status(401)
        res.json(post)
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error')
    }
})

module.exports = router