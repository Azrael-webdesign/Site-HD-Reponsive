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

//app.use(express.static(path.join(__dirname, 'public')));


app.use(express.static('public'))


const basePath = path.join(__dirname, './Pages') 

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

// abrir formulario de cadastro de categoria verbo get
app.get('/categories/createcategory', (req, res) => {
    res.render('categoryCreate')
})

// persistencia de categoria verbo post 
app.post('/categories/createcategory', (req, res) => {
    const nome_categoria = req.body.nome_categoria 
    const descricao = req.body.descricao

    const sql = `INSERT INTO Categoria (nome_categoria, descricao) VALUES ('${nome_categoria}', '${descricao}')`

    pool.query(sql, function(err){
        if(err) {
            console.log(err)
        }

        res.redirect('/categories')
    })
})

// listagem de categorias
app.get('/categories', function (req, res) {
    const query = `SELECT * FROM Categoria`

    pool.query(query, function (err, data) {
        if (err) {
          console.log(err)
        }
    
        const categories = data

        console.log(data)

        res.render('categories', { categories } )
    })
})

// Listar Categoria por ID
app.get('/categories/:id', function (req, res) {
  const id = req.params.id

  const query = `SELECT * FROM Categoria WHERE ?? = ?`
  const data = ['idCategoria', id] //nome banco, nome url

  pool.query(query, data, function (err, data) {
    if (err) {
      console.log(err)
    }

    const category = data[0]

    console.log(data[0])

    res.render('category', { category })
  })
})

// edicao de cateogira
app.get('/categories/edit/:id', function (req, res) {
  const id = req.params.id

  const query = `SELECT * FROM Categoria WHERE ?? = ?`
  const data = ['idCategoria', id]

  pool.query(query, data, function (err, data) {
    if (err) {
      console.log(err)
    }

    const category = data[0]

    console.log(data[0])

    res.render('editcategory', { category })
  })
})

// persistencia da alteracao dos dados da categoria
app.post('/categories/updatecategory', function (req, res) {
  const id = req.body.id
  const nome_categoria = req.body.nome_categoria
  const descricao = req.body.descricao

  const query = `UPDATE Categoria SET ?? = ?, ?? = ? WHERE ?? = ?`
  const data = ['nome_categoria', nome_categoria, 'descricao', descricao, 'idCategoria', id]

  pool.query(query, data, function (err) {
    if (err) {
      console.log(err)
    }

    //res.redirect(`/categories/edit/${id}`)
    res.redirect('/categories')
  })
})

// deletar categoria
app.post('/categories/remove/:id', function (req, res) {
  const id = req.params.id

  const query = `DELETE FROM Categoria WHERE ?? = ?`
  const data = ['idCategoria', id]

  pool.query(query, data, function (err) {
    if (err) {
      console.log(err)
    }

    res.redirect(`/categories`)
  })
})

app.listen(3000)