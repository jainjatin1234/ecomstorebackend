const express = require('express')
const app = express()
const web = require('./routes/web')

const connnectdb = require('./db/connectdb')
const fileupload = require('express-fileupload')


const dotenv = require('dotenv')
dotenv.config(
    {
        path:'.env'
    }
)


const cors = require('cors')
app.use(cors())


//temp file uploader
app.use(fileupload({useTempFiles:true}))


//for data get from api
app.use(express.json())
connnectdb()


app.use(web)


app.get('/',(req,res)=>{
    res.send('hello')
})

app.listen(process.env.PORT,()=>{
    console.log("server started")
})