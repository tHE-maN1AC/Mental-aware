// Functionality for appointment scheduler
document.addEventListener('DOMContentLoaded', function () {
    const appointmentForm = document.getElementById('appointment-form');

    appointmentForm.addEventListener('submit', function (event) {
        event.preventDefault();
        
        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const message = document.getElementById('message').value;

        // Perform validation (Example: Check if required fields are filled)
        if (name && email && date && time) {
            // Send appointment request to server (This is just a mock implementation)
            console.log('Appointment requested:');
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Date:', date);
            console.log('Time:', time);
            console.log('Message:', message);

            // Show confirmation message
            alert('Your appointment request has been sent!');
            // Reset form
            appointmentForm.reset();
        } else {
            alert('Please fill in all required fields.');
        }
    });
});
