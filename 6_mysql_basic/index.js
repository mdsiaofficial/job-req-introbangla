const express = require('express')
const mysql = require('mysql')


const app = express()
const PORT = process.env.PORT || 5000

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "",
    database: "test"
  }
)

app.get('/', (req, res) => {
  res.status(200).json({ message: "home" })
})
app.get("/api/v1", (req, res) => {
  const sql = "SELECT * FROM users"
  db.query(sql, (err, data) => {
    if (err) {
      return res.status(404).json({ message: "Data not found.", error: err })
    }
  })
})
// app.use('/api/v1', userRouter)

// server
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`)
})