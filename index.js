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


    // Smooth Scrolling through Navigation Links
    // 1. Get all the navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        // 2. Add a 'click' a event listener to each link
        anchor.addEventListener('click', function(e){
            // 3. Prevent the default action of the link
            e.preventDefault();

            // 4. Get the target section's ID from the link's href attribute
            const targetId = this.getAttribute('href').substring(1); // Remove the '#' character
            // 5. Find the target section using the ID
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            // 6. Scroll to the target section smoothly
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start' // Align the top of the section with the top of the viewport
            });
        }
        else{
            console.error(`Target section with ID '${targetId}' not found.`);
        }
        });
        
    });

    // Scroll back to Top Button
    // 1. Get the scroll to top button
    // 2. Add a 'click' event listener to the button
    // 3. Scroll to the top of the page smoothly when the button is clicked
    // 4. Log a message to the console when the button is clicked
    
    const scrollToTopButton = document.querySelector('.scroll-to-top');
    // Check if the button exists before adding the event listener
    if (scrollToTopButton) {   
        // Show the button when the user scrolls down 100px from the top
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                scrollToTopButton.style.display = 'block';
            } else {
                scrollToTopButton.style.display = 'none';
                
            }
        }); 
        scrollToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            console.log("Scrolled to top");
        });
    }

    else {
        console.error("Scroll to top button not found.");
    }


    // Add Active Class to Current Element
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', ()=>{
            navLinks.forEach(nav=>nav.classList.remove('active'));
            link.classList.add('active');
        });
    });
});
