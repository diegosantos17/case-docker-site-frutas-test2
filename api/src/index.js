const express = require('express');
const mysql = require('mysql2');

const app = express();

var connection = mysql.createConnection({
    host: 'mysql-container-test3',
    user: 'root',
    password: 'root',
    database: 'db_site_frutas_test3'
});

connection.connect(function(error){
    if(error){
        throw error;
    }

    console.log('Connect database!')
});

app.get('/products', function(req, res){

    connection.query('SELECT * FROM products', function(error, results){
        if(error){
            throw error;
        }

        res.send(results.map(item => ({name: item.name, price: item.price })));
    });

});

app.listen(9001, '0.0.0.0', function(){
    console.log('Listening on port 9001');
})