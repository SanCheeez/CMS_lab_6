import { Document } from "mongoose";

export default interface IPost extends Document {
    id: String,
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
}
