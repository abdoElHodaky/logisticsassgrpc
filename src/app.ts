
import "reflect-metadata";
import application from "express"
import { json,urlencoded } from "express";
import cors from "cors";
import { apiv1 } from "./routes";
const app=application();
const port = process.env.PORT||3000

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
app.use(urlencoded({extended: true}))
app.use(cors())
app.use(json())
app.use(apiv1)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app;
