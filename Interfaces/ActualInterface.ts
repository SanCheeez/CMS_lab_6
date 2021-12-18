import { Document } from "mongoose";

export default interface IActual extends Document {
    id: String,
    theme: String,
    title: String,
    tweets: Number,
}