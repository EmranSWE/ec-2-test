const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! from testing AWS/ update port and nginx and adding cloudflare 🚀🚀🚀')
})

app.get("/name",(req,res)=>{
    res.send("Oi amar name")
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})