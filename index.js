const express = require('express')
const mysql = require('mysql');

const app = express()
const port = 3000

var con = mysql.createConnection({
  host: "db",
  user: "user",
  password: "password", 
  database:'db'
});

con.query('CREATE TABLE IF NOT EXISTS PEOPLE (id int not null auto_increment, name text not null, primary key (id))')

app.get('/people', (req, res) => {
    con.query('SELECT name FROM PEOPLE', (err, result) => {
        if (err) {
            console.log('Error in get', err)
            res.sendStatus(500)
        }
        else {
            const names = result.map(row => `<li>${row.name}</li>`).join('\n')
            res.status(200).send(`<html><body><h1>Full Cycle Rocks!</h1><ul>${names}</ul></body></html>`)
        }
    })
})

app.post('/people', (req, res) => {
    con.query("INSERT INTO PEOPLE (name) VALUES ('Magno')", (err, result) => {
        if (err) {
            console.log('Error in post', err)
            res.status(500).send(err)
        }
        else {
            console.log(result)
            res.sendStatus(200) 
        }
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})