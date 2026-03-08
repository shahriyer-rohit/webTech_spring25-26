// Wait for the page to load completely
document.addEventListener('DOMContentLoaded', function() {
    
    // Get the form element by its ID
    const form = document.getElementById('contactForm');
    
    // Add an event listener for form submission
    form.addEventListener('submit', function(event) {
        
        // Prevent the form from submitting normally
        event.preventDefault();
        
        // Get all input field values
        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Check if any field is empty
        if (firstName === '' || lastName === '' || email === '' || phone === '' || message === '') {
            // Show error message if any field is empty
            alert('Field Value need to be filled up');
            return; // Stop form submission
        }
        
        // If all fields are filled, print values to console
        console.log('=== Contact Form Submission ===');
        console.log('First Name:', firstName);
        console.log('Last Name:', lastName);
        console.log('Email:', email);
        console.log('Phone Number:', phone);
        console.log('Message:', message);
        console.log('================================');
        
        // Optional: Show success message
        alert('Form submitted successfully! Check the console for details.');
        
        // Optional: Reset the form after successful submission
        form.reset();
    });
});