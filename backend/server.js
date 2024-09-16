const expres=require('express')
const cors=require('cors')

const dotenv=require('dotenv')

dotenv.config()

const newsRouter = require('./router/newsRouter')
const app=expres()


const PORT=5005
app.use(expres.json())

app.use(cors());

app.use('/api',newsRouter)



app.listen(PORT,()=>{
    console.log(`SERVER IS RUNNING AT PORT ${PORT}`)
})
