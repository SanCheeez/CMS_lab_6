import mongoose, { Schema } from "mongoose";
import IUser from "../Interfaces/UserInterface";

const UserSchema: Schema = new Schema({
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

export default mongoose.model<IUser>('Users', UserSchema);
