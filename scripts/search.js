
//var numEnrolled;
//var numWaitlisted;

function searchButtonPressed() {
    // Unhide search results section
    searchResults.classList.remove("hidden");

    var table = document.getElementById("resultList");

    // Clear search results
    for (var i = table.rows.length - 1; i > 0; i--) {
        table.deleteRow(i);
    }

    var courseNumber = document.getElementById("courseNumberSearch").value;
    var courseName = document.getElementById("courseNameSearch").value;

    // Populate search results table
    if (courseNumber.length > 0) {
        // search by course number
        fetch('http://localhost:3000/course/courseNumber/' + courseNumber)
            .then(response => response.json())
            //.then(data => console.log(data));
            .then(data => getCourseSections(data));
        
    } else if (courseName.length > 0) {
        // search by course name
        fetch('http://localhost:3000/course/courseName/' + courseName)
            .then(response => response.json())
            //.then(data => console.log(data));
            .then(data => getCourseSections(data));
    }
}

async function getCourseSections(data) {
    // Set course name
    var courseFullName = document.getElementById("courseFullName");
    courseFullName.textContent = "CS " + data[0].courseNumber + " - " + data[0].courseName;

    // Get course sections
    var courseID = data[0].course_ID;
    fetch('http://localhost:3000/coursesection/' + courseID)
        .then(response => response.json())
        //.then(data => console.log(data));
        .then(data => populateSearchResults(data));
}

async function populateSearchResults(data) {
    table = document.getElementById("resultList");

    // Fill search results
    for (var i = 1; i <= data.length; i++) {
        
        var row = table.insertRow(i);

        // Create and insert new cells into row
        var cell0 = row.insertCell(0); // section
        var cell1 = row.insertCell(1); // schedule
        var cell2 = row.insertCell(2); // room
        var cell3 = row.insertCell(3); // instructor
        var cell4 = row.insertCell(4); // status
        var cell5 = row.insertCell(5); // select button

        // Insert data into the new cells
        cell0.innerHTML = data[i-1].sectionNumber;
        cell1.innerHTML = data[i-1].classSchedule;

        // Get room for current course section
        var roomID = data[i-1].room_ID;

        await fetch('http://localhost:3000/room/' + roomID)
            .then(response => response.json())
            .then((data) => {
                cell2.innerHTML =  data[0].roomNumber;
                console.log("room" + (i-1));
            });
        // Get instructor for current course section
        var instructorID = data[i-1].instructor_ID;
        await fetch('http://localhost:3000/instructor/' + instructorID)
            .then(response => response.json())
            .then((data) => {
                cell3.innerHTML = data[0].firstName + " " + data[0].lastName;
                console.log("instr" + (i-1));
            });
        
        //console.log(data[i-1].section_ID);
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
                    status = "<i class='fas fa-check'>";
                } /*else if (numEnrolled == maxEnrolledCapacity && numWaitlisted < maxWaitlistPosition) {
                    // waitlist
                    status = "<i class='fas fa-times'>";
                } */else {
                    // closed
                    console.log("closed");
                    status = "<i class='fas fa-list'>";
                }
                cell4.innerHTML = status;
            });
        


/*
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
        cell4.innerHTML = status;
*/ 
        cell5.innerHTML = "<button id='selectBtn' onclick='addToShoppingCart(" + i + ")'>Select</button>"; 

        
    }


    /*
    // Add and fill 5 random rows
    for (var i = 0; i < Math.random()*10; i++) {
        var row = table.insertRow(table.rows.length);
        
        // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        
        cell1.innerHTML = "NEW CELL1";
        cell2.innerHTML = "NEW CELL2";
        cell3.innerHTML = "NEW CELL3";
        cell4.innerHTML = "NEW CELL4";
        cell5.innerHTML = "NEW CELL5";
        cell6.innerHTML = "NEW CELL6";
    }
    */
}

async function addToShoppingCart() {

}
/*
function setnumWaitlisted(data) {
    numWaitlisted = data;
    console.log(numWaitlisted + "q234rwqer");
}
*/