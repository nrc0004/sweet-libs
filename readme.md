Technologies learned: Request and Cheerio

1. What is Request?

- Request is a dependency that allows you to make http calls from Node.js
- Super simple to use
- Can be inserted into express controller logic so it makes http calls when you send a request to the server running your node file
- Invented by Mikeal Rogers http://mikealrogers.com/

2. What is Cheerio

- Cheerio is a dependency that implements a subset of JQuery's functionality and streamlines it for the server side
- Uses the familiar JQuery syntax
- It can parse nearly any html or xhtml
- In the context of our app it is used to pick out particular DOM elements from the page that you just pulled in using Request
- Mainly developed by Mathew Mueller (if commits are any indication) https://github.com/matthewmueller

3. What is Web Scraping?

- Web scraping is what people used to do when they wanted to grab some data off a website (before APIs), it is a method for pulling in the html from a site, searching it for data that fits a particular description and then doing something with that data (maybe persisting it, maybe displaying it on a different site, maybe analyzing it).
- BE ADVISED: Web Scraping is on shaky ground legally, if you do it on certain pages then it may constitute breaking and entering. See this post for an overview of the legality of web scraping and some guidelines on how to scrape without getting sued: http://blog.icreon.us/advise/web-scraping-legality

4. Our project:

- Our project is a basic web scraper that we wrote to scrape crime data off the FBI website. (here: https://ucr.fbi.gov/crime-in-the-u.s/2015/crime-in-the-u.s.-2015/tables/table-1)
- It's built using Node.js, Express, Request, and Cheerio
- For a great tutorial on how to build a similar scraper see here: https://scotch.io/tutorials/scraping-the-web-with-node-js
- Why we chose this: It's baller
- How were we first made aware of it? Isaac was made aware of this topic when he looked at GA's course offerings and saw the data science immersive.
- What problems does it solve? A fully tricked out version of this app would allow you to grab all the data you need from the FBI's website without having to copy and paste or download all their data. It does this by fully automating the process of copying and pasting their data.
- Why does one use it? Cause the data you want isn't available via API yet.
- What is your opinion on the technology after using it: Absurdly powerful tool that we didn't know existed before this.
- What are the biggest conceptual hurdles (if any) you encountered when researching this? No *conceptual* hurdles of note.
- What resources do you recommend for interested students? Interested students should look at all the links I already posted all around in this area ^^^
- What are 3 interview questions one might be asked about this technology?
  1. Have you done it?
  2. Did it work?
  3. What crawler did you use?

- Instructions to install:
  1. run npm install --save request cheerio express
  2. run node index.js
  3. Go to local host 4000 and hit the root directory
