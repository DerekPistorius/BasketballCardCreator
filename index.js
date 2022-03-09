const express = require('express');

const app = express();

const PORT = process.env.PORT || 4000;

const cors = require('cors')
app.use(cors())

app.use(express.json());

app.post("/api/postName", (req, res) => {
    console.log(req.body)
    const body = req.body
    const newName = body.name
    let response = ''
    let name1 =newName
    response = name1
    res.status(200).send(response)
    console.log(response)
  })

app.post("/api/postJersey", (req, res) => {
    console.log(req.body)
    const body = req.body
    const newNumber = body.name
    console.log(body.name)
    let response = ''
    let number1 =newNumber
    console.log(number1)
    response = number1
    res.status(200).send(response)
    console.log(response)
  })

  app.post("/api/postPosition", (req, res) => {
    console.log(req.body)
    const body = req.body
    const newPosition = body.name
    console.log(body.name)
    let response = ''
    let position1 =newPosition
    console.log(position1)
    response = position1
    res.status(200).send(response)
    console.log(response)
  })

  app.delete("/api/delete", (req, res) => {
    const body = req.body
    const newPosition = body.name
    let response = ''
    let position1 =newPosition
    response = position1
    res.status(200).send(response)
  })

  app.get("/api/getAppVersion", (req, res) => {
      const appVersion = "App Version: 1.0"

      res.status(200).send(appVersion)
  })

  

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));