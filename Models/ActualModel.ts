import mongoose from "mongoose";
import IActual from "../Interfaces/ActualInterface";

const Schema = mongoose.Schema;

const ActualSchema = new Schema({
    id: String,
    theme: String,
    title: String,
    tweets: Number,
})

export default mongoose.model<IActual>('Actual', ActualSchema);