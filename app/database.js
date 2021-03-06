var express = require("express");
var app = express();
var connection = require('./database');
var mysql = require("mysql");
const cors = require('cors');

app.use(cors());
app.use(express.json())

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
    let sql = "SELECT * FROM Course WHERE course_ID = ?";
    connection.query(sql, [req.params.id], function(err, results){
        if (err) throw err;
        res.send(results);
    });
});

//delete courses based on courseID
app.delete('/courses/:id', function(req, res){
    let sql = "DELETE FROM Course WHERE course_ID = ?";
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

app.delete('/courseEnrollment/students/:sectionID/:studentID', function(req, res){
    let sql = "DELETE FROM courseenrollment WHERE section_ID = ? AND student_ID = ?";
    connection.query(sql, [req.params.sectionID, req.params.studentID], function(err, results){
        if (err) throw err;
        res.send(results);
    });
});

app.delete('/shoppingcart/students/:sectionID/:studentID', function(req, res){
    let sql = "DELETE FROM shoppingcart WHERE section_ID = ? AND student_ID = ?";
    connection.query(sql, [req.params.sectionID, req.params.studentID], function(err, results){
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
app.get('/course/courseName/:courseName', function(req, res){
    let sql = "SELECT * FROM course WHERE courseName = ?";
    connection.query(sql, [decodeURI(req.params.courseName)], function(err, results){
        if (err) throw err;
        res.send(results);
    });
});

// SEARCH for sectionName with sectionNumber IN courseSection -> added on page
app.get('/course/courseNumber/:courseNumber', function(req, res){
    let sql = "SELECT * FROM course WHERE courseNumber = ?";
    connection.query(sql, [decodeURI(req.params.courseNumber)], function(err, results){
        if (err) throw err;
        res.send(results);
    });
});


// get course sections from course id
app.get('/coursesection/courseID/:id', function(req, res){
    let sql = "SELECT * FROM coursesection WHERE course_ID = ?";
    connection.query(sql, [req.params.id], function(err, results){
        if (err) throw err;
        res.send(results);
    });
});

// get course section from section id
app.get('/coursesection/:id', function(req, res){
    let sql = "SELECT * FROM coursesection WHERE section_ID = ?";
    connection.query(sql, [req.params.id], function(err, results){
        if (err) throw err;
        res.send(results);
    });
});

// get instructor using instructor_ID
app.get('/instructor/:id', function(req, res){
    let sql = "SELECT * FROM instructor WHERE instructor_ID = ?";
    connection.query(sql, [req.params.id], function(err, results){
        if (err) throw err;
        res.send(results);
    });
});

// get room using room_ID
app.get('/room/:id', function(req, res){
    let sql = "SELECT * FROM room WHERE room_ID = ?";
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

let data = {
    section_ID: 1,
    student_ID: 1,
    unitsEnrolled: 2,
    unitsWaitlisted: 2
}

// INSERT - courses into shopping cart, adding from search results (based on student id) - not working
app.post('/shoppingcart', (req, res) =>{
    const section_ID = req.body.section_ID;
    const student_ID = req.body.section_ID
    let sql = "INSERT INTO shoppingcart VALUES (?, ?, ?, ?)";
    res.send(req.body)
    connection.query(sql, [section_ID, student_ID, 4, 4],function(err, results){
        if (err) throw err;
        res.send(results);
    });
})


// INSERT - courses into course enrollment (based on student id) - not working
app.post('/courseenrollment', (req, res) =>{
    const {section_ID, student_ID, grade} = req.body;
    let sql = "INSERT INTO courseenrollment VALUES (?, ?, ?)";
    connection.query(sql, [section_ID, student_ID, grade],function(err, results){
        if (err) throw err;
        res.send(results);
    });
})

// get number of objects in courseenrollment
app.get('/countcourseenrollment/:id', function(req, res){
    let sql = "SELECT COUNT(*) AS count FROM courseenrollment WHERE section_ID = ?";
    connection.query(sql, [req.params.id], function(err, results){
        if (err) throw err;
        res.send(results);
    });
});

// get number of objects in shoppingcart
app.get('/countshoppingcart', function(req, res){
    let sql = "SELECT COUNT(*) AS count FROM shoppingcart";
    connection.query(sql, function(err, results){
        if (err) throw err;
        res.send(results);
    });
});

app.get('/countshoppingcart', function(req, res){
    let sql = "SELECT * FROM courseenrollment";
    connection.query(sql, function(err, results){
        if (err) throw err;
        res.send(results);
    });
});

app.listen(3000, function(){
    console.log("app listening 3000");
    connection.connect(function(err){
        if (err) throw err;
        console.log('database connected');
    })
});