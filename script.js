// Dark Mode

const mode = document.getElementById("mode");

mode.onclick = function(){

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

mode.innerHTML="☀️";

}else{

mode.innerHTML="🌙";

}

};

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});

// Fade-in Animation

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity=1;

entry.target.style.transform="translateY(0px)";

}

});

});

document.querySelectorAll("section").forEach(sec=>{

sec.style.opacity=0;

sec.style.transform="translateY(40px)";

sec.style.transition="all 0.8s ease";

observer.observe(sec);

});
