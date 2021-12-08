import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ActualSchema = new Schema({
    theme: String,
    title: String,
    tweets: Number,
})

export const Actual = mongoose.model('Actual', ActualSchema);