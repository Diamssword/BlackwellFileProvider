import express from 'express'
import * as dotenv from 'dotenv'
dotenv.config()
import * as path from 'path'
import * as fs from 'fs'
import {initRootCommand,generateDistroCommand} from './helios.js'
const port= process.env.port||3000
let app=express();
process.env.ROOT=path.resolve("packs")
if(!fs.existsSync(process.env.ROOT))
{
    console.log("creating base pack folder")
    fs.mkdirSync(process.env.ROOT)
    initRootCommand.handler({} as any)
}
setInterval(()=>{
    generateDistroCommand.handler({name:"pack"} as any)
},60*1000)//reload toute les minutes
generateDistroCommand.handler({name:"pack"} as any)
app.use("/files/",express.static(process.env.ROOT))
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
  })