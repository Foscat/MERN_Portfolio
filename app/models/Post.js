const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: { type: String, required: true},
    body: { type: String, required: true},
    show: {type: Boolean, default: true},
    createdAt: { type: String, required: true},
    updatedAt: {type: String }
})

const Post = mongoose.model("Post", postSchema);
module.exports = Post;