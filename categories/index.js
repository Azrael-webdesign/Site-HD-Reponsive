/**
 * Módulo de Rotas de Categorias
 */

const express = require('express')
const router  = express.Router()
const path = require('path')
const pool = require('../db/conn')


// abrir formulario de cadastro de categoria verbo get
router.get('/createcategory', (req, res) => {
    res.render('./categories/categoryCreate')
})

// persistencia de categoria verbo post 
router.post('/createcategory', (req, res) => {
    const nome_categoria = req.body.nome_categoria 
    const descricao = req.body.descricao

    const sql = `INSERT INTO Categoria (nome_categoria, descricao) VALUES ('${nome_categoria}', '${descricao}')`

    pool.query(sql, function(err){
        if(err) {
            console.log(err)
        }

      /**
       * o sinal ./ direciona paa a pasta ./categories dento de views
       *  junto com o middleware que ativa o router /categories
       * caminho /categories./
       */

        res.redirect('./') 
    })
})

// listagem de categorias
router.get('/', function (req, res) {
    const query = `SELECT * FROM Categoria`

    pool.query(query, function (err, data) {
        if (err) {
          console.log(err)
        }
    
        const categories = data

        console.log(data)

        res.render('./categories/categories', { categories } )
    })
})

// Listar Categoria por ID
router.get('/:id', function (req, res) {
  const id = req.params.id

  const query = `SELECT * FROM Categoria WHERE ?? = ?`
  const data = ['idCategoria', id] //nome banco, nome url

  pool.query(query, data, function (err, data) {
    if (err) {
      console.log(err)
    }

    const category = data[0]

    console.log(data[0])

    res.render('./categories/category', { category })
  })
})

// edicao de cateogira
router.get('/edit/:id', function (req, res) {
  const id = req.params.id

  const query = `SELECT * FROM Categoria WHERE ?? = ?`
  const data = ['idCategoria', id]

  pool.query(query, data, function (err, data) {
    if (err) {
      console.log(err)
    }

    const category = data[0]

    console.log(data[0])

    res.render('./categories/editcategory', { category })
  })
})

// persistencia da alteracao dos dados da categoria
router.post('/updatecategory', function (req, res) {
  const id = req.body.id
  const nome_categoria = req.body.nome_categoria
  const descricao = req.body.descricao

  const query = `UPDATE Categoria SET ?? = ?, ?? = ? WHERE ?? = ?`
  const data = ['nome_categoria', nome_categoria, 'descricao', descricao, 'idCategoria', id]

  pool.query(query, data, function (err) {
    if (err) {
      console.log(err)
    }

    res.redirect('./')
  })
})

// deletar categoria
router.post('/remove/:id', function (req, res) {
  const id = req.params.id

  const query = `DELETE FROM Categoria WHERE ?? = ?`
  const data = ['idCategoria', id]

  pool.query(query, data, function (err) {
    if (err) {
      console.log(err)
    }
 
    res.redirect('../')
  })
})

module.exports = router