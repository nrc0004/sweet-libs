const express = require("express")
const cheerio = require("cheerio")
const request = require("request")
const fs  = require('fs')

const app = express()

app.get('/', function (req, res){

  url = 'https://ucr.fbi.gov/crime-in-the-u.s/2015/crime-in-the-u.s.-2015/tables/table-1'


  request(url, function(error, response, html){
    if(!error){
      var $ = cheerio.load(html)
      var population_this_here

      $('#cell51').filter(function(){
        let data = $(this)
        var population = data.html()
        console.log("firing now!")
        res.write(population)

      })
        res.send(population_this_here)
    }
  })
})

app.listen('4000')
console.log('Scraping faces on 4k')
