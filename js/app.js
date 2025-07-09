    //setting path for components folder
    const basePath = window.location.hostname.includes("github.io") 
    ? './Portfolio_Website/_includes/' 
    : '.../_includes/';


    //fetch footer and inject it to every page
function GetFooter(){
   // fetch('./Portfolio_Website/components/footer.html')


    fetch(`${basePath}footer.html`)

    .then(response => {
        return response.text();
    })

    .then(function(html){
        const parser = new DOMParser();
        const footerPage = parser.parseFromString(html, 'text/html');

       const footer = footerPage.querySelector('.footer');
       if(footer){
            document.getElementById('page-footer').innerHTML = footer.outerHTML;
        
       }
       else{
        console.warn(' bathong <footer> e kae?');
       }

       
    })

    //Will console a warning if the folder is not
    .catch(function (error){
    console.warn('Could not find your footer.html file mamasita', error)
});
}

window.addEventListener('DOMContentLoaded', GetFooter);


//fetch navbar and inject it to every html page
function GetNavBar(){
//fetch('./Portfolio_Website/components/navbar.html')
fetch(`${basePath}navbar.html`)
.then(response => {
    return response.text()
})
.then(function(html){

    //to convert the HTML string into a document
    var parser = new DOMParser();
    var navPage = parser.parseFromString(html, 'text/html');

    var navigationBar = navPage.querySelector('nav');
    //injecting navbar into page
    if (navigationBar){

   document.getElementById('navibar').innerHTML = navigationBar.outerHTML;
    }
    else{
        console.warn('could not find the navigation bar miss');
    }
 

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


})
.catch(function (error){
    console.warn('Could not find your file mamasita', error)
});
 
}
//adding event listener to call Get NavBar page on load
window.addEventListener('DOMContentLoaded', GetNavBar);







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

   
    
  
