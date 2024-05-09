import mongoose from "mongoose";


const Schema = mongoose.Schema

const ThoughtsSchema = new Schema({
    text: {
        type: String,
        required: true
    }
}, { timestamps: true })

export default mongoose.model('Thoughts', ThoughtsSchema)