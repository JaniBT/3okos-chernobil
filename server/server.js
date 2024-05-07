import express from "express"
import dotenv from "dotenv"
dotenv.config()

const PORT = process.env.PORT

const app = express()

app.use('/api/users')

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`)
})
