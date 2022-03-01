const PORT = 3000

const express = require('express')
const cheerio = require('cheerio')
const axios = require('axios')

const x = express()

const url = 'https://thehimalayantimes.com/'

axios (url)
.then(response => {
    const html = response.data
    const $ = cheerio.load(html)
    const articles = []

    $('.alith_post_title', html).each(function()
    {
        const title = $(this).text()
        const url = $(this).find('a').attr('href')
        articles.push({
            title,
            url,
        })
    })
    console.log(articles)
    }).catch(err => console.log(err))

x.listen(PORT,() => console.log('server running on PORT ${PORT}'))
