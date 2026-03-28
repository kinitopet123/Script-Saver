const express=require("express")
const fs=require("fs")
const path=require("path")
const app=express()
app.use(express.json({limit:"2mb"}))
function rand(){return Math.floor(Math.random()*9e9+1e9).toString()+".html"}
app.post("/generate",async(req,res)=>{
const t=req.body.content||""
const template="<html><head><meta name=\"color-scheme\" content=\"light dark\"></head><body><pre style=\"word-wrap: break-word; white-space: pre-wrap;\">TEXT HERE</pre></body></html>"
const out=template.replace("TEXT HERE",t)
const name=rand()
const file=path.join(__dirname,"public",name)
fs.writeFileSync(file,out)
res.json({url:"https://robloxscriptsaver.com/"+name})
})
app.listen(3000)