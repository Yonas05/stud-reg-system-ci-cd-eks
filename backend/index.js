const express = require("express")
const cors = require("cors")
const { Pool } = require("pg")

const app = express()

app.use(cors())
app.use(express.json())

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
})

pool.query(`
CREATE TABLE IF NOT EXISTS students(
id SERIAL PRIMARY KEY,
name VARCHAR(100),
email VARCHAR(100),
course VARCHAR(100),
age INT
)
`)

app.post("/api/students", async (req,res)=>{
  const {name,email,course,age} = req.body

  const result = await pool.query(
  "INSERT INTO students(name,email,course,age) VALUES($1,$2,$3,$4) RETURNING *",
  [name,email,course,age]
  )

  res.json(result.rows[0])
})

app.get("/api/students", async (req,res)=>{
  const result = await pool.query("SELECT * FROM students")
  res.json(result.rows)
})

app.put("/students/:id", async (req,res)=>{
  const {id} = req.params
  const {name,email,course,age} = req.body

  await pool.query(
  "UPDATE students SET name=$1,email=$2,course=$3,age=$4 WHERE id=$5",
  [name,email,course,age,id]
  )

  res.json({message:"updated"})
})

app.delete("/api/students/:id", async (req,res)=>{
  const {id} = req.params
  await pool.query("DELETE FROM students WHERE id=$1",[id])
  res.json({message:"deleted"})
})

app.listen(5000,()=>{
  console.log("Backend running on port 5000")
})