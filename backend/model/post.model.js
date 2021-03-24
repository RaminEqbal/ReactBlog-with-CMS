const mongoose = require("mongoose");

const Schema = mongoose.Schema;



/**
 * title: Title of The Post as a String
 * author: Author name of the Blogpost
 * content: Content of the element as a String representing HTML
 * category: List of Categories this Post is connected to
 */
const postSchema = new Schema({

    title:{
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true
    },
    release: {
        type: Boolean,
        required: true,
        default: true,
    },
    category: {
        type: Array,
        default: [],
    }

}, {
    timestamps: true,
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;