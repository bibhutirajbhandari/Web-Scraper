const PORT = 3005

const express = require('express')
const cheerio = require('cheerio')
const axios = require('axios')

const x = express()

const url = 'https://www.ndtv.com/'

x.listen(PORT,() => console.log('server running on PORT'+PORT))

axios (url)
.then(response => {
    const html = response.data
    const $ = cheerio.load(html)
    const articles = []

    $('.item-title', html).each(function()
    {
        const title = $(this).text()
        const url = $(this).attr('href')
        articles.push({
            title,
            url,
        })
    })
    console.log(articles)
    }).catch(err => console.log(err))



