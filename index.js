//    start the server 

const express  =  require('express')

const app  = express()

 app.use(express.json())
//  stiching the routes here 

require("./routes/ideas.routes")(app)




app.listen(8000,()=>{

 console.log(" app started  on the  port number", 3000)
})