document.getElementById('codeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const accessCode = document.getElementById('accessCode').value;
    const validCodes = ['CODE123', 'CODE456']; // Replace with your valid codes

    if (validCodes.includes(accessCode)) {
        // Redirect to the restricted content page
        window.location.href = 'restricted.html'; // Change this to your actual restricted page URL
    } else {
        alert('Access denied! Invalid code.'); // Alert for invalid code
    }
});