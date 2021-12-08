import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    avatar: String,
    image: String,
    date: String,
    text: String,
    name: String,
    nickname: String,
    comments: Number,
    retweets: Number,
    likes: Number,
    is_liked: Boolean,
})

export const Post = mongoose.model('Posts', PostSchema);