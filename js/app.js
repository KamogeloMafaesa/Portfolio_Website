
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');


hamburger.addEventListener("click", ()=>{
    
    navLinks.classList.toggle("open");
    
    links.forEach(link=>{
        link.classList.toggle("fade");
          
    });
});



hamburger.addEventListener("touch", ()=>{
    
    navLinks.classList.toggle("open");
    
    links.forEach(link=>{
        link.classList.toggle("fade");
          
    });
});






//typewriter
const titles = ["An XR DEVELOPER." ,"A FRONT-END DEVELOPER.","A GAME DEVELOPER", "A GENERALIST"];

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

   
    
  
