//fetch navbar and inject it to every html page

function GetNavBar(){
fetch('../components/navbar.html')
.then(response => {
    return response.text()
})
.then(function(html){

    //to convert the HTML string into a document
    var parser = new DOMParser();
    var navPage = parser.parseFromString(html, 'text/html');

    var navigationBar = navPage.querySelector('nav');
    //injecting navbar into page
    document.getElementById('navibar').innerHTML = navigationBar.outerHTML;

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
const titles = ["AN XR DEVELOPER." ,"A FRONT-END DEVELOPER.","A GAME DEVELOPER", "A SOFTWARE DEVELOPER"];

let i = 0;
let counter;


function typing(){
    let title = titles[i].split("");
    let loopType = function(){
        if(title.length > 0){
            document.getElementById('typewriter').innerHTML += title.shift();
        }
        else{
            deleteTitle();
            return false;
        };
        counter = setTimeout(loopType, 200);
    };
    loopType();
};

function deleteTitle(){
    let title = titles[i].split("");
    let loopDelete = function(){
       if(title.length > 0){
        title.pop();
        document.getElementById('typewriter').innerHTML = title.join("");
       }
       else{
           if(titles.length > (i+ 1)){
               i++;
           }
           else{
               i = 0;
           };
           typing();
        return false;
       };
       counter = setTimeout(loopDelete, 200);
   };
   loopDelete();
};

typing();

   
    
  
