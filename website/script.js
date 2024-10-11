window.onload = function() {
    const header = document.querySelector("header");
    const aboutSection = document.querySelector("#about");
    const projectsSection = document.querySelector("#projects");
    const hobbiesSection = document.querySelector("#hobbies");

    const footer = document.querySelector("footer");
    const profileImageContainer = document.querySelector(".profile-image-container");


    setTimeout(() => {
        header.classList.add("moved-up");

      
        

        profileImageContainer.style.display = "block"; 
        profileImageContainer.style.opacity = "0"; 
        setTimeout(() => {
            profileImageContainer.style.opacity = "1"; 
        }, 100); 

        setTimeout(() => {
            aboutSection.style.opacity = "1";
        }, 500); 


        setTimeout(() => {
            projectsSection.style.opacity = "1";
        }, 1000); 

        
        setTimeout(() => {
            hobbiesSection.style.opacity = "1";
        }, 1500); 

        footer.style.display = "block";
        footer.style.opacity = "1";
    }, 8000); 
};
