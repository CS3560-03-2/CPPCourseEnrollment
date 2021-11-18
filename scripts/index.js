document.addEventListener('DOMContentLoaded', function () {
    fetch('http://localhost:3000/courseenrollment/students/1')
        .then(response => response.json())
        //.then(data => console.log(data));
        .then(data => populateClassSchedule(data));

    fetch('http://localhost:3000/shoppingcart/students/1')
        .then(response => response.json())
        .then(data => populateShoppingCart(data));
});

function populateShoppingCart(data) {
    var table = document.getElementById("shoppingCart");
    console.log(data);
    for (var i = 1; i <= data.length; i++) {
        // Create and insert new row into table
        var row = table.insertRow(i);
        
        // Create and insert new cells into row
        var cell0 = row.insertCell(0); // course
        var cell1 = row.insertCell(1); // schedule
        var cell2 = row.insertCell(2); // room
        var cell3 = row.insertCell(3); // instructor
        var cell4 = row.insertCell(4); // units
        var cell5 = row.insertCell(5); // status
        var cell6 = row.insertCell(6); // delete button

        
        /*
        cell0.innerHTML = data[i-1].section_ID;
        cell1.innerHTML = data[i-1].student_ID;
        cell2.innerHTML = data[i-1].unitsEnrolled;
        cell3.innerHTML = data[i-1].unitsWaitlisted;
        cell4.innerHTML = "";
        cell5.innerHTML = "";
        cell6.innerHTML = "";
        */
        /*
        // Insert data into the new cells
        cell0.innerHTML = "CS " + data[i-1].course.courseNumber + "-" + data[i].coursesection.sectionNumber;                                  // course
        cell1.innerHTML = data[i-1].coursesection.meetingDays + " " + data[i].coursesection.startTime + "-" + data[i].coursesection.endtime;  // schedule
        cell2.innerHTML = data[i-1].room.roomNumber;                                                                                          // room
        cell3.innerHTML = data[i-1].instructor.firstName + " " + instructor.lastName;                                                         // instructor
        cell4.innerHTML = data[i-1].course.creditUnit;                                                                                        // units
        */

        /*
        // TODO: run a query to get numEnrolled and numWaitlisted
        fetch('http://localhost:3000/courseenrollment')

        // TODO: Get number of students enrolled
        var numEnrolled = 0;

        // TODO: Get number of students waitlisted
        var numWaitlisted = 0;

        // Set status according to number of students
        var status = "";
        if (numEnrolled < maxEnrolledCapacity) {
            // open
            status = "<i class='fas fa-check'>";
        } else if (numEnrolled == maxEnrolledCapacity && numWaitlisted < maxWaitlistPosition) {
            // waitlist
            status = "<i class='fas fa-times'>";
        } else {
            // closed
            status = "<i class='fas fa-list'>";
        }
        */

        /*
        cell5.innerHTML = status;                                                                                                            // status
        
        cell6.innerHTML = "<button id='deleteButton' onclick='deleteThisRow'>Delete</button>"; 
        */                                              // delete button
    }
}

function populateClassSchedule(data) {
    var table = document.getElementById("classSchedule");
    console.log(data);
    for (var i = 1; i <= data.length; i++) {
        // Create and insert new row into table
        var row = table.insertRow(i);
        
        // Create and insert new cells into row
        var cell0 = row.insertCell(0); // course
        var cell1 = row.insertCell(1); // schedule
        var cell2 = row.insertCell(2); // room
        var cell3 = row.insertCell(3); // instructor
        var cell4 = row.insertCell(4); // units
        var cell5 = row.insertCell(5); // status
        
        /*
        cell0.innerHTML = data[i-1].section_ID;
        cell1.innerHTML = data[i-1].student_ID;
        cell2.innerHTML = data[i-1].grade;
        cell3.innerHTML = "";
        cell4.innerHTML = "";
        cell5.innerHTML = "";
        */
        /*
        // Insert data into the new cells
        cell0.innerHTML = "CS " + data[i].course.courseNumber + "-" + data[i].coursesection.sectionNumber;                                  // course
        cell1.innerHTML = data[i].coursesection.meetingDays + " " + data[i].coursesection.startTime + "-" + data[i].coursesection.endtime;  // schedule
        cell2.innerHTML = data[i].room.roomNumber;                                                                                          // room
        cell3.innerHTML = data[i].instructor.firstName + " " + instructor.lastName;                                                         // instructor
        cell4.innerHTML = data[i].course.creditUnit;                                                                                        // units

        // TODO: insert status logic from populateShoppingCart(data)

        cell5.innerHTML = status; 
        */                                                                                                          // status
    }
}
