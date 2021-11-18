var student = 1;

document.addEventListener('DOMContentLoaded', function () {
    fetch('http://localhost:3000/courseenrollment/students/' + student)
        .then(response => response.json())
        //.then(data => console.log(data));
        .then(data => populateClassSchedule(data));
});

async function populateClassSchedule(data) {
    var table = document.getElementById("classSchedule");
    console.log(data);
    for (var i = 1; i <= data.length; i++) {
        // Create and insert new row into table
        var row = table.insertRow(i);
        
        // Create and insert new cells into row
        var cell0 = row.insertCell(0); // select box
        var cell1 = row.insertCell(1); // course
        var cell2 = row.insertCell(2); // schedule
        var cell3 = row.insertCell(3); // room
        var cell4 = row.insertCell(4); // instructor
        var cell5 = row.insertCell(5); // units
        var cell6 = row.insertCell(6); // status
        
        cell0.innerHTML = "<input type='checkbox' id='dropCheck'>"; 
        
        // Insert data into the new cells
        var sectionID = data[i-1].section_ID;
        await fetch('http://localhost:3000/coursesection/' + sectionID)
            .then(response => response.json())
            .then((data) => {
                cell1.innerHTML = data[0].sectionNumber;
                cell2.innerHTML = data[i-1].classSchedule;

                courseID = data[0].course_ID;
                fetch('http://localhost:3000/courses/' + courseID)
                    .then(response => response.json())
                    .then((data) => {
                        cell1.innerHTML =  "CS "  + data[0].courseNumber + "." + cell1.innerHTML;
                        cell5.innerHTML = data[0].creditUnit;
                    });
                
                // Get room number for current course section
                roomID = data[0].room_ID;
                fetch('http://localhost:3000/room/' + roomID)
                    .then(response => response.json())
                    .then((data) => {
                        cell3.innerHTML =  data[0].roomNumber;
                    });

                instructorID = data[0].instructor_ID;
                fetch('http://localhost:3000/instructor/' + instructorID)
                    .then(response => response.json())
                    .then((data) => {
                        cell4.innerHTML = data[0].firstName + " " + data[0].lastName;
                        console.log("instr" + (i-1));
                    });
            });



        // needs to be fixed
        var maxEnrolledCapacity = data[i-1].maxEnrolledCapacity;
        await fetch('http://localhost:3000/countcourseenrollment/' + data[i-1].section_ID)
            .then(response => response.json())
            .then((data) => {
                //console.log(data[0].count);
                var numEnrolled = data[0].count;

                console.log("open: " + numEnrolled + "/" + maxEnrolledCapacity);
                var status = "";
                if (numEnrolled < maxEnrolledCapacity) {
                    // open
                    status = "<i class='fas fa-times'>";
                } /*else if (numEnrolled == maxEnrolledCapacity && numWaitlisted < maxWaitlistPosition) {
                    // waitlist
                    status = "<i class='fas fa-list'>";
                } */else {
                    // closed
                    console.log("closed");
                    status = "<i class='fas fa-check'>";
                }
                cell6.innerHTML = status;
            });  
        

    }
}

async function showConfirmation() {
    console.log("showConfirmation");
    var confirmation = confirm("Are you sure you want to drop the course(s)?");
    if (confirmation) {
        // drop courses





        alert("Classes have been dropped.");
        // return to index.html
        window.location.href = 'index.html';
    }
}