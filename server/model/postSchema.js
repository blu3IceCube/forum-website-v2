const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    forumName: { type: String, required: true },
    forumInfo: { type: String, required: true },
    posts: [{
        userName: { type: mongoose.Schema.Types.String, ref: 'User', required: true },
        title: { type: String, required: true },
        content: { type: String, required: true }
    }]
})

const Post = mongoose.model('Post', postSchema)

module.exports = Post