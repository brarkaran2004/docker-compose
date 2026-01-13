import express from "express"
import { PrismaClient } from "@prisma/client"

const app = express()
const client = new PrismaClient()

app.use(express.json())

app.get("/",async (req,res)=>{
    const users = await client.user.findMany({

    })
    res.json({
        message:"get endpoint",
        users:users
    })
})


app.post("/",async (req,res) => {
    const users = await client.user.create({
        data: {
            username: `user_${Date.now()}`,
            password: Math.random().toString(),
        },
    })
    res.json({
        message:"user  created"
    })
    
})
