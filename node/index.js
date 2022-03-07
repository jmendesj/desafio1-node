const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'db_app'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

connection.connect();

var output = "<h1>Full Cycle Rocks!</h1>"

const sql = "INSERT INTO people(name) values('Joao')"

connection.query(sql)

connection.query('select * from people', function(err, rows, fields) {
    if (err) throw err;
   
    Object.keys(rows).forEach(function(key) {
        var row = rows[key];
        output +=row.name + "</br>"
      });

  });
  
connection.end();





app.get('/', (req,res) => {


    res.send(output)
   
})


app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})