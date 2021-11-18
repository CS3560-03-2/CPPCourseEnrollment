var express = require("express");
var app = express();
var connection = require('./database');
var mysql = require("mysql");
const cors = require('cors');

app.use(cors());

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
    let sql = "SELECT * FROM Student WHERE student_ID = ?";
    connection.query(sql, [req.params.id], function(err, results){
        if (err) throw err;
        res.send(results);
    });
});

//get student based on studentID
app.delete('/students/:id', function(req, res){
    let sql = "DELETE FROM Student WHERE student_ID = ?";
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

//delete courses based on courseID
app.delete('/courses/:id', function(req, res){
    let sql = "DELETE FROM Course WHERE courseID = ?";
    connection.query(sql, [req.params.id], function(err, results){
        if (err) throw err;
        res.send('Deletion Sucessful');
    });
});

//get all courseEnrollment
app.get('/courseEnrollment', function(req, res){
    let sql = "SELECT * FROM courseenrollment";
    connection.query(sql, function(err, results){
        if (err) throw err;
        res.send(results);
    });
});

//get courseEnrollment based on studentID
app.get('/courseEnrollment/students/:id', function(req, res){
    let sql = "SELECT * FROM courseenrollment WHERE student_ID = ?";
    connection.query(sql, [req.params.id], function(err, results){
        if (err) throw err;
        res.send(results);
    });
});

//get all shoppingCart
app.get('/shoppingcart', function(req, res){
    let sql = "SELECT * FROM shoppingcart";
    connection.query(sql, function(err, results){
        if (err) throw err;
        res.send(results);
    });
});

//get shoppingCart based on studentID
app.get('/shoppingcart/students/:id', function(req, res){
    let sql = "SELECT * FROM shoppingcart WHERE student_ID = ?";
    connection.query(sql, [req.params.id], function(err, results){
        if (err) throw err;
        res.send(results);
    });
});

// DELETE - remove course from shopping cart (based on student id)
app.delete('/shoppingcart/:section_ID/:student_ID', function(req, res){
    let sql = "DELETE FROM shoppingcart WHERE section_ID = ? AND student_ID = ?";
    connection.query(sql, [req.params.section_ID, req.params.student_ID], function(err, results){
        if (err) throw err;
        res.send(results);
    });
});

// DELETE - drop courses from course enrollment (based on student id)
app.delete('/courseenrollment/:section_ID/:student_ID', function(req, res){
    let sql = "DELETE FROM courseenrollment WHERE section_ID = ? AND student_ID = ?";
    connection.query(sql, [req.params.section_ID, req.params.student_ID], function(err, results){
        if (err) throw err;
        res.send(results);
    });
});

// SELECT - based off course name AND/OR course number (search for classes)
// SEARCH for courseID with courseName IN course-> SEARCH for sectionName with courseID IN courseSection -> added on page
app.get('/course/:courseName', function(req, res){
    let sql = "SELECT * FROM course WHERE courseName = ?";
    connection.query(sql, [decodeURI(req.params.courseName)], function(err, results){
        if (err) throw err;
        res.send(results);
    });
});

app.get('/coursesection/:id', function(req, res){
    let sql = "SELECT * FROM coursesection WHERE course_ID = ?";
    connection.query(sql, [req.params.id], function(err, results){
        if (err) throw err;
        res.send(results);
    });
});

// SEARCH for sectionName with sectionNumber IN courseSection -> added on page
app.get('/coursesection/name/:id', function(req, res){
    let sql = "SELECT * FROM coursesection WHERE sectionNumber = ?";
    connection.query(sql, [req.params.id], function(err, results){
        if (err) throw err;
        res.send(results);
    });
});


// INSERT - courses into shopping cart, adding from search results (based on student id) - not working
app.post("create/shoppingcart/:section_ID/:student_ID/:unitsEnrolled/:unitsWaitlisted", (req, res) =>{
    let sql = "INSERT INTO shoppingcart VALUES (?, ?, ?, ?)";
    connection.query(sql, [req.params.section_ID, req.params.student_ID, req.params.unitsEnrolled, req.params.unitsWaitlisted],function(err, results){
        if (err) throw err;
        res.send(results);
    });
})


// INSERT - courses into course enrollment (based on student id) - not working
app.post("create/courseenrollment/:section_ID/:student_ID/:grade", (req, res) =>{
    let sql = "INSERT INTO courseenrollment VALUES (?, ?, ?)";
    connection.query(sql, [req.body.section_ID, req.body.student_ID, req.body.grade],function(err, results){
        if (err) throw err;
        res.send(results);
    });
})


app.listen(3000, function(){
    console.log("app listening 3000");
    connection.connect(function(err){
        if (err) throw err;
        console.log('database connected');
    })
});