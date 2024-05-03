const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')
const app = express()

//importar routers
const categoryRoutes = require('./categories') //chamando arquivo index.js do categories router

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

// tudo que não tiver extensão '.handlebars' precisa estar dentro da pasta public
// paginas html, javascript css imagens etc
app.use(express.static('public'))

const basePath = path.join(__dirname, './Pages') 

//middleware que ativa o router /categories
app.use('/categories', categoryRoutes)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.listen(3000)