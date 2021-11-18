
var student = 1;


document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function(){
        showConfirmation();
    }, 250);

    // get shopping cart and fill shopping cart table
    fetch('http://localhost:3000/shoppingcart/students/' + student)
        .then(response => response.json())
        //.then(data => console.log(data));
        .then(data => populateShoppingCart(data));
});

async function populateShoppingCart(data) {
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
        var cell6 = row.insertCell(6); // delete btn
        
        
        // Insert data into the new cells
        var sectionID = data[i-1].section_ID;
        await fetch('http://localhost:3000/coursesection/' + sectionID)
            .then(response => response.json())
            .then((data) => {
                cell0.innerHTML = data[0].sectionNumber;
                // Get schedule info for current course section
                cell1.innerHTML = data[0].classSchedule;

                courseID = data[0].course_ID;
                fetch('http://localhost:3000/courses/' + courseID)
                    .then(response => response.json())
                    .then((data) => {
                        // Get course info for current course section
                        cell0.innerHTML =  "CS "  + data[0].courseNumber + "." + cell0.innerHTML;
                        // Get credit amount for current course section
                        cell4.innerHTML = data[0].creditUnit;
                        
                    });
                
                // Get room number for current course section
                roomID = data[0].room_ID;
                fetch('http://localhost:3000/room/' + roomID)
                    .then(response => response.json())
                    .then((data) => {
                        cell2.innerHTML =  data[0].roomNumber;
                    });
                
                // Get instructor for current course section
                instructorID = data[0].instructor_ID;
                fetch('http://localhost:3000/instructor/' + instructorID)
                    .then(response => response.json())
                    .then((data) => {
                        cell3.innerHTML = data[0].firstName + " " + data[0].lastName;
                    });
            });

        // TODO needs to be fixed
        var maxEnrolledCapacity = data[i-1].maxEnrolledCapacity;
        await fetch('http://localhost:3000/countcourseenrollment/' + data[i-1].section_ID)
            .then(response => response.json())
            .then((data) => {
                var numEnrolled = data[0].count;

                //console.log("open: " + numEnrolled + "/" + maxEnrolledCapacity);
                var status = "";
                if (numEnrolled < maxEnrolledCapacity) {
                    // open
                    status = "<i class='fas fa-times'>";
                } /*else if (numEnrolled == maxEnrolledCapacity && numWaitlisted < maxWaitlistPosition) {
                    // waitlist
                    status = "<i class='fas fa-list'>";
                } */else {
                    // closed
                    //console.log("closed");
                    status = "<i class='fas fa-check'>";
                }
                cell5.innerHTML = status;
            });  
        
        // Delete button
        cell6.innerHTML = "<button id='deleteBtn' onclick='deleteThisRow'>Delete</button>";
    }
}

async function showConfirmation() {
    var confirmation = confirm("Are you sure you want to enroll in the course(s)?");
    if (confirmation) {
        // enroll in courses



        alert("You have successfully enrolled in the course(s).");
    }
    // return to index.html
    window.location.href = 'index.html';
}