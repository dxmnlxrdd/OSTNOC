// Select elements
const startButton = document.getElementById('startSurvey');
const surveyContent = document.getElementById('surveyContent');
const yesButton = document.getElementById('yesBtn');
const noButton = document.getElementById('noBtn');

// Start survey button - Show the survey content with fade-in
startButton.addEventListener('click', function() {
    startButton.classList.add('hidden');
    surveyContent.classList.remove('hidden');
    surveyContent.classList.add('visible');
});

// If "No" is clicked, redirect to Google
noButton.addEventListener('click', function() {
    window.location.href = 'https://www.google.com';
});

// If "Yes" is clicked, do something (you can add your logic here)
yesButton.addEventListener('click', function() {
    alert('You chose to start the survey!'); // Example action
});

