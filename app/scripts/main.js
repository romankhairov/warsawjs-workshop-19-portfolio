var $form = document.querySelector('form'); // 8. reference to the form

function displayMessage(message) {
    alert(`Na ten ${name} ${message} wyslany kod`);
}

$form.addEventListener('submit', function(evt) { // 9. listening for Submit

    evt.preventDefault(); // 10. Turn off defoult form acting

    const data = new FormData( $form ); // 11. Var, that keeps form input data

    const map = new Map( data ); // 12. Convert input form data into map

    const email = map.get('email') 

    // alert(email);
    displayMessage(email); // 13. Show form input

});
