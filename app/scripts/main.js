var $myForm = document.getElementById('myForm');


function displayMessage(message) {

}

$myForm.addEventListener('submit', function(evt) {

    evt.preventDefault();

    formData = new FormData(myForm);
    console.log(map);

});
