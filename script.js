document.getElementById('leadForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;

    if (name && email && phone) {
        alert('Thank you! Your details have been submitted.');
        document.getElementById('leadForm').reset();
    } else {
        alert('Please fill out all fields.');
    }
});
