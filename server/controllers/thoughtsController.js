import mongoose from "mongoose"
import dotenv from 'dotenv'
dotenv.config()

import Thoughts from "../models/thoughtsModel.js";


export const getAllThoughts = async (req, res) => {
    try {
        const response = await Thoughts.find()
        
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}

export const createNewThought = async (req, res) => {
    try {
        const {text} = req.body
        const response = await Thoughts.create({
            text
        })
        res.status(200).json(response)
    } catch(error) {
        res.status(400).json({ error: error.message })
    }
}

export const deleteThought = async (req, res) => {
    const {id} = req.params
    try {
        const response = await Thoughts.findOneAndDelete({ _id: id })
        res.status(200).json(response)
    } catch(error) {
        res.status(404).json({error: error.message})
    }
}