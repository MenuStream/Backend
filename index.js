require('dotenv').config();
var cors = require('cors');
const dataModel = require('./modal')

const express = require('express')
const app = express()
const port = process.env.PORT || 8000


const connectDB = require('./db')
connectDB();

app.use(cors())
app.use(express.json())

app.get('/data', async (req,res) => {
    try {
        const data = await dataModel.find({})
        res.json(data)

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message : "Server error"
        })
    }
})

app.post('/data', async function (req, res) {
    try {
        const data = new dataModel({
            name : req.body.name,
            image_url: req.body.image_url,
            articles: req.body.articles
        })
        const newData = await data.save()
        res.send(newData)
        res.status(201).send("done")

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message : "Server error"
        })
    }
})


app.put('/data/article/:id', async function (req, res) {
  try {
    const data = await dataModel.findByIdAndUpdate(
        {_id:req.params.id},
        {name: req.body.name,image_url:req.body.image_url,articles: req.body.articles}
        )
    const newData = await data.save()
    res.status(201).send("done")
  } catch (error) {
    console.log(error)
    res.status(500).json({
        message : "Server error"
    })
  }
})



app.delete('/data/:id', async function(req, res) {
  try {
    const data = await dataModel.findByIdAndDelete({_id:req.params.id})
    res.send(`Delete record with id ${req.params.id}`);
  } catch (error) {
    console.log(error)
    res.status(500).json({
        message : "Server error"
    })
  }
});

app.put('/data/:id',async function(req, res) {
  try {
    const data = await dataModel.findById({_id:req.params.id})
    if(req.body.name != null ) {
      data.name= req.body.name
    } 
    if(req.body.image_url != null ) {
      data.image_url= req.body.image_url
    } 
    const newData = await data.save()
    
  } catch (error) {
    console.log(error)
    res.status(500).json({
        message : "Server error"
    })
  }
})


app.listen(port, () => console.log(`listening on port ${port}!`))