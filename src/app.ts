
import "reflect-metadata";

const express = require('express')
const app = express()
const port = process.env.PORT
const routes=require("./routes.js")

/*app.get('/', (req:any, res:any) => {
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
})*/
app.use(routes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app;
