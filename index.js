const express = require('express')
const path = require('path')
const mysql = require('mysql')
const pool = require('./db/conn')

const app = express()

app.use(express.static('public'))

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())


const basePath = path.join(__dirname, './Pages') 


app.get('/category/insertcategory', (req, res) => {
    res.sendFile(`${basePath}/crud/categoria.html`)
  })

app.post('/category/insertcategory', (req, res) => {
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


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})


app.listen(3000)