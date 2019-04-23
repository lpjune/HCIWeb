const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
.use(express.static(path.join(__dirname, 'public')))
.set('views', path.join(__dirname, 'views'))
.set('view engine', 'ejs')

.get('/', (req, res) => res.render('pages/index'))
.get('/index.ejs', (req, res) => res.render('pages/index'))
.get('/404.ejs', (req, res) => res.render('pages/404'))
.get('/blank.ejs', (req, res) => res.render('pages/blank'))
.get('/newreport.ejs', (req, res) => res.render('pages/newreport'))
.get('/charts.ejs', (req, res) => res.render('pages/charts'))
.get('/db.ejs', (req, res) => res.render('pages/db'))
.get('/forgot-password.ejs', (req, res) => res.render('pages/forgot-password'))
.get('/login.ejs', (req, res) => res.render('pages/login'))
.get('/register.ejs', (req, res) => res.render('pages/register'))
.get('/tables.ejs', (req, res) => res.render('pages/tables'))

.listen(PORT, () => console.log(`Listening on ${ PORT }`))
