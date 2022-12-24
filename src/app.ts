
import "reflect-metadata";

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req:any, res:any) => {
  res.json({"Articles":[
    {
        title:"d",
        id:1,
        url:"d/d/d"
    },
    {
        title:"d",
        id:2,
        url:"d/d/d"
    }
  ]})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app;
