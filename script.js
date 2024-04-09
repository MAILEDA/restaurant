const mobile = document.querySelector('.menu-toggle');
const mobileLink = document.querySelector('.sidebar');

mobile.addEventListener("click", function(){
    mobile.classList.toggle("is-active");
    mobileLink.classList.toggle("active");
})

const nav = document.querySelector('.nav-toggle');
const moLink = document.querySelector('.sidebar');

nav.addEventListener("click", function(){
    nav.classList.toggle("active");
    moLink.classList.toggle("active");
})






var step = 100;
var stepFilter = 60;
var scrolling = true;


const back = document.querySelector('.back');
const next = document.querySelector('.back');

back.addEventListener("click", (e) =>{
    e.preventDefault();
    document.querySelector(".highlight-wrapper").animate({
        scrollLeft: "+=" + step  + "px"
    })
    
})

next.addEventListener("click", (e) =>{
    e.preventDefault();
    document.querySelector(".highlight-wrapper").animate({
        scrollLeft: "-+" + step + "px"
    })
})