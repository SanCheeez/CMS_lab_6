import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    id: String,
    avatar: String,
    background: String,
    name: String,
    nickname: String,
    description: String,
    month: String,
    year: String,
    in_reading: String,
    readers: String,
})

export const User = mongoose.model('Users', UserSchema);