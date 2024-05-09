import express from 'express'
import { getAllThoughts, createNewThought, deleteThought } from '../controllers/thoughtsController.js'

const router = express.Router()

router.get('/', getAllThoughts)

router.post('/', createNewThought)

router.delete('/:id', deleteThought)

export default router