////navbar-scroll

let navbar = document.querySelector(".navbar-container");
let formNavbar = document.querySelector(".search-container form");
let searchNavbar = document.querySelector(".search-container form input");
let searchIcon = document.querySelector(".search-container form button:nth-child(2)");
let cartIcon = document.querySelector(".search-container form button:nth-child(4)")
let catSvg = document.querySelector(".category-svg-span svg");
let catTxt = document.querySelector(".category-svg-span span");
let navCategory = document.querySelectorAll(".header-mid span");
let navCategoryIcon = document.querySelectorAll(".header-mid i");
let logo = document.querySelector(".header-left a img");

document.addEventListener("scroll", function () {

    let scrollPosition = window.scrollY;

    if(scrollPosition >= 100){
        navbar.style.backgroundColor = "white";
        navbar.style.position = "fixed";
        navbar.style.boxShadow = "0 10px 20px #08002a14";
        searchIcon.style.backgroundColor = "#edeef3";
        searchNavbar.style.backgroundColor = "#edeef3";
        formNavbar.style.backgroundColor = "#edeef3";
        cartIcon.style.backgroundColor = "#edeef3";
        catSvg.style.fill = "black";
        catTxt.style.color = "black";
        navCategory.forEach(txt => {
            txt.style.color = "black";
        });
        navCategoryIcon.forEach(icn => {
            icn.style.color = "black";
        });
        logo.src = "./assets/images/logo copy.png";
    }
    else{
        navbar.style.position = "static";
        navbar.style.backgroundColor = "unset";
        navbar.style.boxShadow = "unset";
        searchIcon.style.backgroundColor = "white";
        searchNavbar.style.backgroundColor = "white";
        formNavbar.style.backgroundColor = "white";
        cartIcon.style.backgroundColor = "white";
        catSvg.style.fill = "white";
        catTxt.style.color = "white";
        navCategory.forEach(txt => {
            txt.style.color = "white";
        });
        navCategoryIcon.forEach(icn => {
            icn.style.color = "white";
        });
        logo.src = "./assets/images/educal-logo-foot copy.png";
    }
})


////category-hover-nav-animation


let category = document.querySelector(".navbar-container .container .col-container .col4 .header-left .category a");

let categoryNav = document.querySelector(".category-nav");

let catHover = false;

category.addEventListener("mouseover", function () {
    categoryNav.style.opacity = "1";
    catHover = true;
})

category.addEventListener("mouseout", function () {
    categoryNav.style.opacity = "0";
    catHover = false;
    setTimeout(function () {
        if (!catHover) {
            categoryNav.style.opacity = "0";
        }
    }, 200);
})

categoryNav.addEventListener("mouseover", function () {
    categoryNav.style.opacity = "1";
    catHover = true;
})

categoryNav.addEventListener("mouseout", function () {
    categoryNav.style.opacity = "0";
    catHover = false;
    setTimeout(function () {
        if (!catHover) {
            categoryNav.style.opacity = "0";
        }
    }, 200);
})


////hover-nav-animation


let home = document.querySelector(".home .home-sub-menu");

let homeNav = document.querySelector(".home-nav");

let homeHover = false;

home.addEventListener("mouseover", function () {
    homeNav.style.opacity = "1";
    homeHover = true;
})

home.addEventListener("mouseout", function () {
    homeNav.style.opacity = "0";
    homeHover = false;
    setTimeout(function () {
        if (!homeHover) {
            homeNav.style.opacity = "0";
        }
    }, 200);
})

homeNav.addEventListener("mouseover", function () {
    homeNav.style.opacity = "1";
    homeHover = true;
});

homeNav.addEventListener("mouseout", function () {
    homeHover = false;
    setTimeout(function () {
        if (!homeHover) {
            homeNav.style.opacity = "0";
        }
    }, 200);
});