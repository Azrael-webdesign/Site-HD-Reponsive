const mysql = require('mysql')

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'gelndmlj',
    database: 'base_conhecimento'
})

module.exports = pool