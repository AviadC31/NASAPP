const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const express = require('express')
const path = require('path')
const app = express()

const planetSchema = new mongoose.Schema({
    title: String,
    hdurl: String,
    explanation: String,
    hideDescription: Boolean
})

const Planet = mongoose.model("Planet", planetSchema)

mongoose.connect("mongodb://localhost/nasapp", { useNewUrlParser: true, useUnifiedTopology: true })

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
    next()
})

app.get('/images', (req, res) => {
req.query.id.length<1 ? 
        Planet.find({}).then(planets => res.send(planets)) :
        Planet.findById(req.query.id)
            .then(planets => res.send([planets]))
    
})

app.post('/image', (req, res) => {
    const planet = new Planet(req.body)
    planet.save().then(planet => res.send(planet))
})
app.delete('/image/:id', function (req, res) {
    const id = req.params.id
    Planet.findByIdAndDelete(id, function (err, planet) {
        if (err) res.send(err)
        else res.send(planet.id)
    })
})

app.listen(8080, () => console.log("server up and running on port 8080"))

















