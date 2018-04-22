var $myForm = document.getElementById('myForm');


function displayMessage(message) {
 // Some code
}

$myForm.addEventListener('submit', function(evt) {

    evt.preventDefault();

    var formData = new FormData(myForm);
    console.log(formData);

}

});

// Test 2
