import { Document } from "mongoose";

export default interface IUser extends Document {
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
}