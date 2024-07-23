// script.js

function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Thank you, ${name}. Your message has been sent!`);
        // Here you can add code to actually send the form data to your server
    } else {
        alert('Please fill in all fields.');
    }
}
