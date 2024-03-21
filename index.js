const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')
const mysql = require('mysql')

const pool = require('./db/conn')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.use(express.static(path.join(__dirname, 'public')));

//app.use(express.static('javascript'))

//app.use(express.static(path.join(__dirname, 'Pages')));
// app.use(express.static(path.join(__dirname, 'CSS')))
// app.use(express.static(path.join(__dirname, 'images')))
// app.use(express.static(path.join(__dirname, 'javascript')))
//app.use(express.static(path.join(__dirname, 'Pages')))




const basePath = path.join(__dirname, './Pages') 

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html')
// })

// formulario de cadastro de categoria
app.get('/category/createcategory', (req, res) => {
    res.render('categoryCreate')
  })

//rota de persistencia de categoria
app.post('/category/createcategory', (req, res) => {
    const nome_categoria = req.body.nome_categoria 
    const descricao = req.body.descricao

    const sql = `INSERT INTO Categoria (nome_categoria, descricao) VALUES ('${nome_categoria}', '${descricao}')`

    pool.query(sql, function(err){
        if(err) {
            console.log(err)
        }

        res.redirect('/')
    })
})

app.listen(3000)