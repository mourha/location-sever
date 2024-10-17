const express  = require ('express');
const  nodemon  = require('nodemon');
const app  = express();
const datastore = require('nedb')  

app.use(express.static ("public"))
app.use(express.json({limit: '1mb'}))
app.listen(3000, () =>{
 console.log('sever is working')
})

const database = new datastore('database.db');
database.loadDatabase();

app.post("/api", (req,res) =>{
    const data = req.body;
    const timestapm = Date.now()
    data.timestapm = timestapm
    database.insert(data)
    res.json(data)
    // console.log(data)
})

app.get("/api", (req,res)  =>{
    database.find({}, (err,data) =>{
        if(err){
            response.end(err)
            return
        }else{
            res.send(data)
        }
    })
})

 // t=y