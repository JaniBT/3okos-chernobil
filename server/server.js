import express from "express"
import dotenv from "dotenv"
import router from "./routes/routes.js"
import mongoose from "mongoose"
dotenv.config()

const PORT = process.env.PORT

const app = express()

app.use(express.json())

app.use('/api/thoughts', router)

mongoose.connect(process.env.CONNECTION_STRING)
  .then(
    app.listen(PORT, () => {
      console.log(`Connected to database! Server is listening on http://localhost:${PORT}`)
    })
  )
  .catch((error) => {
    console.log(error)
  })

