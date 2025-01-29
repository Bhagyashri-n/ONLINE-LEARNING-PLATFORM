// Play the selected video
function playVideo(videoFile) {
    document.getElementById('videoTitle').innerText = videoFile.split('.')[0].replace(/_/g, ' ');
    document.getElementById('videoSource').src = videoFile;
    document.getElementById('videoElement').load();
    document.getElementById('videoPlayer').style.display = 'block';
}

// Mark video as completed
function markAsCompleted() {
    alert('Congratulations! You have completed this video.');
    // Optionally, you can update the progress here (e.g., by storing it in local storage or a database)
}

// Start the quiz (this is just a placeholder)
function startQuiz() {
    alert('Starting quiz...');
    // You can link to a quiz page or create a quiz UI here
}

// Show the login form
document.getElementById('loginLink').addEventListener('click', function () {
    document.getElementById('login').style.display = 'block';
});

// Handle user login
function loginUser(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // You should authenticate the user here (e.g., via an API)
    if (email === "user@example.com" && password === "password123") {
        alert('Login successful');
        document.getElementById('login').style.display = 'none';
        document.getElementById('loginMessage').innerText = ''; // Clear error message if login is successful
    } else {
        document.getElementById('loginMessage').innerText = 'Invalid email or password!';
    }
}
