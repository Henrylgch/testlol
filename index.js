const express = require('express')
const app = express()
const fs = ('fs')

app.get("/", (req, res) => {
  res.send("Hola mundo")
})

var port = process.env.PORT || 1337
app.listen(port, () => {
  console.log("El servidor esta corriendo");
})