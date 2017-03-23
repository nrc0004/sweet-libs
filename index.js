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
      var population
      var json = { population: ""}

      $('#cell51').filter(function(){
        var data = $(this)
        population = data.html()

        json.population = population;
        res.send(population)
      })
    }
  })
})

app.listen('4000')
console.log('Scraping faces on 4k')

exports = module.exports = app
