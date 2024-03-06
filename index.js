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

app.use(express.static('public'))

const basePath = path.join(__dirname, './Pages') 

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

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

//consulta de categorias
// app.get('/category', function(re1, res){
//     const query  = `SELECT * FROM Categoria`

//     pool.query(query, function (err, data) {
//         if (err) {
//             console.log(err)
//         }

//         const category = data

//         console.log(data)

//         res.render('category', {category})
//     })
// })

app.get('/books', function (req, res) {
    const query = `SELECT * FROM books`
  
    pool.query(query, function (err, data) {
      if (err) {
        console.log(err)
      }
  
      const books = data
  
      console.log(data)
  
      res.render('books', { books })
    })
  })
  





app.listen(3000)