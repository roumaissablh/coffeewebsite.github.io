//Icons 
let searchIcon = document.getElementById("search-icon");
let listeIcon = document.getElementById("list-icon1");
let menuIcon = document.getElementById("list-icon2");

//
let searchInput = document.querySelector(".search-input");
let listItem = document.querySelector(".list-item");
let menu = document.querySelector(".menu");

searchIcon.addEventListener("click",()=>{
    searchInput.classList.toggle("active");
    listItem.classList.remove("active");
    menu.classList.remove("active");
})

listeIcon.addEventListener("click",()=>{
    listItem.classList.toggle("active");
    menu.classList.remove("active");
    searchInput.classList.remove("active");
})

menuIcon.addEventListener("click",()=>{
    menu.classList.toggle("active");
    listItem.classList.remove("active");
    searchInput.classList.remove("active");
})