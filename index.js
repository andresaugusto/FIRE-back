const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const strainsController = require('./controllers/strains')
const mongoose = require('mongoose')

app.use(cors())
app.use(bodyParser.json())

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.use('/strains', strainsController)

app.set('port', process.env.PORT || 8000)

app.listen(app.get('port'), () => {
  console.log(`✅ PORT: ${app.get('port')} 🌟`)
})
