var express = require("express");
var app = express();
var connection = require('./database');
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: 'localhost',
    database: 'courseenrollment',
    user: 'root',
    password: 'asdf1234'
});

//get all students
app.get('/students', function(req, res){
    let sql = "SELECT * FROM Student";
    connection.query(sql, function(err, results){
        if (err) throw err;
        res.send(results);
    });
});

//get student based on studentID
app.get('/students/:id', function(req, res){
    let sql = "SELECT * FROM Student WHERE studentID = ?";
    connection.query(sql, [req.params.id], function(err, results){
        if (err) throw err;
        res.send(results);
    });
});

//get student based on studentID
app.delete('/students/:id', function(req, res){
    let sql = "DELETE FROM Student WHERE studentID = ?";
    connection.query(sql, [req.params.id], function(err, results){
        if (err) throw err;
        res.send('Deletion Sucessful');
    });
});

//get all courses
app.get('/courses', function(req, res){
    let sql = "SELECT * FROM Course";
    connection.query(sql, function(err, results){
        if (err) throw err;
        res.send(results);
    });
});

//get courses based on courseID
app.get('/courses/:id', function(req, res){
    let sql = "SELECT * FROM Course WHERE courseID = ?";
    connection.query(sql, [req.params.id], function(err, results){
        if (err) throw err;
        res.send(results);
    });
});

//get courses based on courseID
app.delete('/courses/:id', function(req, res){
    let sql = "DELETE FROM Course WHERE courseID = ?";
    connection.query(sql, [req.params.id], function(err, results){
        if (err) throw err;
        res.send('Deletion Sucessful');
    });
});

app.listen(3000, function(){
    console.log("app listening 3000");
    connection.connect(function(err){
        if (err) throw err;
        console.log('database connected');
    })
});