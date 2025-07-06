document.addEventListener('DOMContentLoaded', () => {

    // open resume upon click of My Resume
    const resumeButton = document.getElementById("resume");
    const githubButton = document.getElementById("github");
    if (resumeButton) {
        resumeButton.addEventListener('click', () => { 
            const resumeUrl = 'https://docs.google.com/document/d/1DunS2Mf2aeJqK2Jjb8knaJ3j3WtK58mV/edit?usp=drive_link';
            window.open(resumeUrl, '_blank');
            console.log('Resume link opened in a new tab.');
        });
    } else {
        console.error("Resume button with ID 'resume' not found.");
    }

    // Open Github upon click of "Github" button
    if (githubButton) {
        githubButton.addEventListener('click', () => { 
            const githubUrl = "https://github.com/Arghyajyoti007"; 
            window.open(githubUrl, "_blank");
            console.log("GitHub opened in new tab");
        });
    } else {
        console.error("GitHub button with ID 'github' not found.");
    }

});
