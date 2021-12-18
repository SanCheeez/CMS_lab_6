import mongoose from "mongoose";
import IPost from "../Interfaces/PostInterface";

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    id: String,
    avatar: String,
    image: String,
    date: String,
    text: String,
    name: String,
    nickname: String,
    comments: { type: Number, default: 0 },
    retweets: { type: Number, default: 0 },
    likes: { type: Number, default: 0 },
    is_liked: { type: Boolean, default: false },
})

export default mongoose.model<IPost>('Posts', PostSchema);
