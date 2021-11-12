
function searchButtonPressed() {
    
    /*
    // temporary toggle search results visibility
    var searchResults = document.getElementById("searchResults");
    if (searchResults.classList.contains("hidden")) {
        searchResults.classList.remove("hidden");
    } else {
        searchResults.classList.add("hidden");
    }
    */
   
    // Show search results section
    searchResults.classList.remove("hidden");

    var table = document.getElementById("resultList");

    // Clear search results
    for (var i = table.rows.length - 1; i > 0; i--) {
        table.deleteRow(i);
    }

    // Fill search results




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
    
}