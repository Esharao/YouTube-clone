var menuIcon=document.querySelector(".menu");
var sidebar=document.querySelector(".sidebar");
var containerr=document.querySelector(".container");

menuIcon.onclick=function(){
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("larg-container");
}