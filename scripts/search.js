
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

function getCourseSections(data) {
    // Set course name
    var courseFullName = document.getElementById("courseFullName");
    courseFullName.value = data[0].courseNumber + " - " + data[0].courseName;

    // Get course sections
    var courseID = data[0].course_ID;
    fetch('http://localhost:3000/coursesection/' + courseID)
        .then(response => response.json())
        //.then(data => console.log(data));
        .then(data => populateSearchResults(data));
}

function populateSearchResults(data) {


    // Fill search results
    for (var i = 1; i <= data.length; i++) {
        
        // Get instructor for current course section
        var instructorID = data[i-1].instructor_ID;
        var instructorFirstName;
        var instructorLastName;

        fetch('http://localhost:3000/instructor/' + instructorID)
            .then(response => response.json())
            .then((data) => {
                instructorFirstName = data[0].firstName;
                instructorLastName = data[0].lastName;
            });

        // Get room for current course section
        var roomID = data[i-1].room_ID;
        var roomNumber;
        fetch('http://localhost:3000/room/' + roomID)
            .then(response => response.json())
            .then((data) => {
                roomNumber = data[0].roomNumber;
            });

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
        cell2.innerHTML = roomNumber;
        cell3.innerHTML = instructorFirstName + " " + instructorLastName;
        cell4.innerHTML = "";
        cell5.innerHTML = "<button id='selectBtn' onclick='addToShoppingCart(" +  + ")'>Select</button>"; 
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

function addToShoppingCart() {

}