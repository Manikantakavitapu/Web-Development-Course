const express = require('express')
const { json } = require('express/lib/response')
const app = express()
const mongoose = require('mongoose')
const {newStudent} =require('./student')
const port = 3000

app.use(express.json())

mongoose.connect('mongodb://localhost:27017/ipc7')
const db =mongoose.connection
db.on('error',(err)=> console.log(err))
db.once('open',() => console.log("your db is connnected"))

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/student', async(req, res) => {
    const getAllStudents = await new newStudent.find()
    res.json(getAllStudents)
  })
  app.post('/student', async(req, res) => {
const addStudent = new newStudent({
    firstName:req.body.firstName,
    lastName:req.body.lastName,
    age:req.body.age
})
const pushStudent = await addStudent.save()
res.json(pushStudent)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})