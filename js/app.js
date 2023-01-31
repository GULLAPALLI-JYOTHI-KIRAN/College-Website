"use strict"
 function sidebar(){
const hamburger=document.querySelector('.hamburger');
const sideBarContainer=document.querySelector('.side-bar-container');
const sideCloseButton=document.querySelector('.side-close-button');
const navContainer=document.querySelector(".nav-container");
const everyYear=document.getElementById("Every-year");
// side bar enable and disable js code start
hamburger.addEventListener("click",function (){
    sideBarContainer.style.left="0%"
    sideBarContainer.style.transition="left 1s linear";
});
sideCloseButton.addEventListener("click",function (){
    sideBarContainer.style.left="-100%"
    sideBarContainer.style.transition="left 1s linear";
});
// side bar enable and disable js code end
//scroll nav-bar start
window.addEventListener("scroll",function(){
    const ScrollYNumber=window.scrollY;
    const windowWidth=window.innerWidth>=992 ? 90 : 70;
    if(ScrollYNumber>=windowWidth){
        navContainer.classList.add("nav-sticky");
    }
    else{
        navContainer.classList.remove("nav-sticky");
    }
});
//scroll nav-bar end
//footer copy right year from -to- start
const year=new Date();
console.log(year.getFullYear());
const data=year.getFullYear();
everyYear.innerText=data;
//footer copy right year from -to- end
}
sidebar();
