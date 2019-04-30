

var Report = require("./public/js/demo/report.js");

const express = require('express')
const path = require('path')
var bodyParser = require("body-parser");
// const MongoClient = require('mongodb').MongoClient;
// const db = require('./config/db');

const port = process.env.PORT || 5000

var app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => res.render('pages/index'))
app.get('/index.ejs', (req, res) => res.render('pages/index'))
app.get('/404.ejs', (req, res) => res.render('pages/404'))
app.get('/blank.ejs', (req, res) => res.render('pages/blank'))
app.get('/newreport.ejs', (req, res) => res.render('pages/newreport'))
app.get('/charts.ejs', (req, res) => res.render('pages/charts'))
app.get('/db.ejs', (req, res) => res.render('pages/db'))
app.get('/forgot-password.ejs', (req, res) => res.render('pages/forgot-password'))
app.get('/login.ejs', (req, res) => res.render('pages/login'))
app.get('/register.ejs', (req, res) => res.render('pages/register'))
app.get('/settings.ejs', (req, res) => res.render('pages/settings'))
app.get('/tables.ejs', (req, res) => res.render('pages/tables'))
app.use(bodyParser.urlencoded({ extended: true }))


app.listen(port, () => {
  console.log('We are live on ' + port);
});

// MongoClient.connect(db.url, { useNewUrlParser: true }, (err, client) => {
//   if (err) return console.log(err)

//   // Add this line below to make it work with the new version of mongodb
//   // (make sure you add the database name and not the collection name)
//   database = client.db("api")

//   require("./report_routes")(app, database)
//   app.listen(port, () => {
//     console.log("we are live on " + port)

//     database.collection("reports").find({}).toArray(function (err, result) {
//       if (err) throw err;
//       c = result;
//       console.log(result);

//       for (var i = 0; i < c.length; i++) {
//         c[i] = new Report(c[i].title, c[i].detail, c[i].date, c[i].category, c[i]._id);
//       }
//       client.close();
//     });
//   })
// })
