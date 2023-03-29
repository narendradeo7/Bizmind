// navbar working 

// making nav link active on click of navbar 

document.querySelectorAll(".nav-link").forEach(function(elem){elem.addEventListener("click",function(){
    document.querySelector(".nav-link.active").classList.remove("active");
    document.querySelector(".nav-item.active").classList.remove("active");  

    this.classList.add("active");   
      this.parentElement.classList.add("active");
});});

console.log("working of js");




// rotation of eyes 

const eyes = document .querySelectorAll('.eye');
const thinkimg = document.getElementsByClassName('thinkimg')[0];

// getting center of the think img 

const rekt= thinkimg.getBoundingClientRect();

const anchorX = rekt.left + rekt.width /2;

const anchorY= rekt.top + rekt.height /2;

document.addEventListener('mousemove',(e)=>{

    const mouseX= e.clientX;
    const mouseY=e.clientY;

    // console.log(mouseX/window.innerWidth +"vh"+ mouseY/window.innerHeight+"vh");

// for the movement of the eyes 
eyes[0].style.left=42+(mouseX/window.innerWidth)*2+"%";
eyes[0].style.top=37+(mouseY/window.innerHeight)*10 +"%";
eyes[1].style.left=43.95+(mouseX/window.innerWidth)*4+"%";
eyes[1].style.top=40.26+(mouseY/window.innerHeight)*4 +"%";

    const angleDeg = angle(mouseX,mouseY,anchorX,anchorY);

    // console.log(angleDeg);
// for rotation and color change 
    eyes.forEach(eye =>{
        // console.log("eye move ");
        eye.style.transform = "rotate("+90+ angleDeg +"deg)";
        
        thinkimg.style.filter="hue-rotate("+angleDeg+"deg)";
    })
})


// angle function to get angele of mouse movement to the center of the image 

function angle(cx,cy,ex,ey){
    const dy =ey-cy;
    const dx=ex-cx;
    
    // now we will convert it into radian 

    const rad=Math.atan2(dy,dx);
    const deg = rad *180/Math.PI;
    return deg;
}


// animate on scroll 

const options = {
  root: null,
  threshold:0.3
};

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry => {
      // entry.target.classList.toggle("show",entry.isIntersection)
      if(entry.isIntersecting) {
          entry.target.classList.add("show");
                   console.log("Fully visible"); 
                 } else {
                  entry.target.classList.remove("show");
                   console.log("not fully visible");
                 }
      
    })
},options);


       

const hiddenElements =document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=> observer.observe(el));


const observer1 = new IntersectionObserver((entries)=>{
    entries.forEach(entry => {
        // entry.target.classList.toggle("show",entry.isIntersection)
        if(entry.isIntersecting) {
            entry.target.classList.add("show1");
                     console.log("Fully visible"); 
                   } else {
                    entry.target.classList.remove("show1");
                     console.log("not fully visible");
                   }
        
      })
  },options);
  
  
         
  
  const hiddenElements1 =document.querySelectorAll('.hidden1');
  hiddenElements1.forEach((el)=> observer1.observe(el));


// Adjust the "querySelector" value to target your image
var img = document.querySelectorAll("img");

document.body.classList.add('js-loading');
function removeLoadingClass() {
document.body.classList.remove('js-loading');
}
img.forEach(image=>{
image.addEventListener("load", removeLoadingClass);

})


// // stoping animation on hover 

// var slider= document.querySelectorAll(".slider");

// slider.forEach((elem)=>{  elem.addEventListener("hover",()=>{ 
//   slider.forEach((el)=>{el.style.animationPlayState ='paused';})
//  }) });