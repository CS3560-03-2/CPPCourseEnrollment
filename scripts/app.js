

function addRow() {
    var table = document.getElementById("shoppingCart");
    var row = table.insertRow(table.rows.length);

    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);

    // Add some text to the new cells:
    cell1.innerHTML = "NEW CELL1";
    cell2.innerHTML = "NEW CELL2";
    cell3.innerHTML = "NEW CELL3";
    cell4.innerHTML = "NEW CELL4";
    cell5.innerHTML = "NEW CELL5";
    cell6.innerHTML = "NEW CELL6";
    cell7.innerHTML = "NEW CELL7";
}

/*

// testing: getting data from the database

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "CS3560FinalProj"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    
    con.query("SELECT * FROM Student", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});

*/