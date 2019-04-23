const express = require('express')
const path = require('path')
var bodyParser = require("body-parser");
const MongoClient    = require('mongodb').MongoClient;
const db             = require('./config/db');

const port = 5000;

var app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => res.render('pages/index'))
app.get('/index.ejs', (req, res) => res.render('pages/index'))
app.get('/404.ejs', (req, res) => res.render('pages/404'))
app.get('/blank.ejs', (req, res) => res.render('pages/blank'))
app.get('/charts.ejs', (req, res) => res.render('pages/charts'))
app.get('/db.ejs', (req, res) => res.render('pages/db'))
app.get('/forgot-password.ejs', (req, res) => res.render('pages/forgot-password'))
app.get('/login.ejs', (req, res) => res.render('pages/login'))
app.get('/register.ejs', (req, res) => res.render('pages/register'))
app.get('/tables.ejs', (req, res) => res.render('pages/tables'))
app.use(bodyParser.urlencoded({ extended: true }))

MongoClient.connect(db.url, { useNewUrlParser: true }, (err, database) => {
  if (err) return console.log(err)

  // Add this line below to make it work with the new version of mongodb
  // (make sure you add the database name and not the collection name)
  database = database.db("api")

  require("./routes")(app, database)
  app.listen(port, () => {
    console.log("we are live on " + port)
  })
})




