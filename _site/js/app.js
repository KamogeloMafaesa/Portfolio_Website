
//adding event listeners for hamburger menu when screen is smaller

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');


hamburger.addEventListener('click', ()=>{
    
    navLinks.classList.toggle("open");
    
    links.forEach(link=>{
        link.classList.toggle("fade");
          
    });
});

//for phones and devices with touch screens
hamburger.addEventListener("touchstart", ()=>{
    
    navLinks.classList.toggle("open");
    
    links.forEach(link=>{
        link.classList.toggle("fade");
          
    });
});


//typewriter
const titles = ["AN XR DEVELOPER.",
    "A FRONT-END DEVELOPER.",
    "A GAME DEVELOPER",
    "A SOFTWARE DEVELOPER"];

let i = 0;
let charIndex = 0;
let isDeleting = false;
let delay = 100;
let counter;


function typewriter(){

    let currentTitle = titles[i];
    
    const display = document.getElementById("typewriter");


    if(!display) return;

    //decide which text to display
    if(isDeleting){
        charIndex--;
        delay = 60;
    }
    else{
        charIndex++;
        delay = 120;
    }

    display.innerHTML = currentTitle.substring(0, charIndex);

    //pause before deleting current text
    if(!isDeleting && charIndex === currentTitle.length){

        display.classList.add("blinking-caret");
        delay = 1200;
        isDeleting = true;
    }
    else{
        display.classList.remove("blinking-caret");
    }

    //print the next title
    if(isDeleting && charIndex == 0){
        isDeleting = false;
        i = (i + 1) % titles.length;
        delay = 300;
    }

    setTimeout(typewriter, delay);
}

typewriter();

   
    
  
