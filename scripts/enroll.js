
function onLoad() {
    console.log("onLoad");

    setTimeout(function(){
        showConfirmation();
    }, 250);

    // get shopping cart and fill shopping cart table

}


function sh(owConfirmation) {
    console.log("showConfirmation");
    var confirmation = confirm("Are you sure you want to enroll in the course(s)?");
    if (confirmation) {
        // enroll in courses



        alert("You have successfully enrolled in the course(s).");
    }
    // return to index.html
    window.location.href = 'index.html';
}