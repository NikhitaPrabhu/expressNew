/**
 * Express code will be here!!!
 */

 var express = require('express')
 var ejs = require('ejs')
 var bp = require('body-parser')


 var app = express()

 app.set('view engine','ejs')

 app.set('views',__dirname + '/template')

 

 var urlencodeparser = bp.urlencoded({extended:false})
 app.use(bp.json())

 app.get("/", function (req,res) {
    res.send("Hello from Express")
 })

 app.get("/home", function (req,res) {
    res.render('home')
 })
 app.get("/about", function (req,res) {
    res.render('about')
 })

 app.post("/about", urlencodeparser,function (req,res) {
     console.log(req.body)
    res.send("Recieved information" +JSON.stringify(req.body))
 })

 app.post('/contact/:name', function (req,res) {
     console.log(req.body)
      //res.send("Get in touch with: " +req.params.name)
      //console.log(req.body)
      var profileDaya = {
        "name":req.params.name,
        "location":req.body.location,
        "time":req.body.time

      }
     res.render('profile',  {
        name:req.params.name,
        profile:req.body

      })
  })

 app.listen(8888)
