
function onLoad() {
    console.log("onLoad");

    // get drop cart and fill drop cart table

}

function showConfirmation() {
    console.log("showConfirmation");
    var confirmation = confirm("Are you sure you want to drop the course(s)?");
    if (confirmation) {
        // drop courses





        alert("Classes have been dropped.");
        // return to index.html
        window.location.href = 'index.html';
    }
}