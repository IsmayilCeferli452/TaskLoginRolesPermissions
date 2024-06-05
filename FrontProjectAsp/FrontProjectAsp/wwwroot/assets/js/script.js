

////header-search-animation

let search = document.querySelector(".search-container form input");

let form = document.querySelector(".search-container form");

search.addEventListener("focus", function () {
    form.style.border = "1px solid blue";
})

search.addEventListener("blur", function () {
    setTimeout(function () {
        form.style.border = "1px solid transparent";
    }, 100);
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



////home-hover-nav-animation

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



////online-course-category

let categories = document.querySelectorAll(".course-heading-bottom span");



let coursesTop = document.querySelector(".course-carts-bottom");

let coursesBottom = document.querySelector(".course-carts-bottom");

let courseSeeAll = document.querySelector(".course-see-all");

categories.forEach(category => {
    if (!category.classList.contains("course-see-all")) {
        category.addEventListener("click", function () {
            category.style.backgroundColor = "#ced4da";
            setTimeout(() => {
                category.style.backgroundColor = "#edeef3";
            }, 300);
            coursesTop.style.opacity = "0";
        })
    }
    else {
        category.addEventListener("click", function () {
            category.style.backgroundColor = "#ced4da";
            setTimeout(() => {
                category.style.backgroundColor = "#edeef3";
            }, 300);

            coursesTop.style.opacity = "1";
            courseSeeAll.style.color = "#2b4eff";
            category.style.color = "black";

            courseSeeAll.addEventListener("mouseover", function(){
                courseSeeAll.style.color = "#2b4eff";
            })
        })
    }
});


////navbar-scroll

let navbar = document.querySelector(".navbar-container");
let formNavbar = document.querySelector(".search-container form");
let searchNavbar = document.querySelector(".search-container form input");
let searchIcon = document.querySelector(".search-container form button:nth-child(2)");
let cartIcon = document.querySelector(".search-container form button:nth-child(4)")

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
    }
    else{
        navbar.style.position = "static";
        navbar.style.backgroundColor = "unset";
        navbar.style.boxShadow = "unset";
        searchIcon.style.backgroundColor = "white";
        searchNavbar.style.backgroundColor = "white";
        formNavbar.style.backgroundColor = "white";
        cartIcon.style.backgroundColor = "white";
        
    }
})



////plans-js

let leftButton = document.querySelector(".plans-heading-bottom button:first-child");

let rightButton = document.querySelector(".plans-heading-bottom button:last-child");

let leftPlan = document.querySelector(".plan-container .plan:first-child");

let rightPlan = document.querySelector(".plan-container .plan:last-child");

leftButton.addEventListener("click", function () {
    leftButton.style.backgroundColor = "#2b4eff";
    leftButton.style.color = "white"
    rightButton.style.backgroundColor = "white";
    rightButton.style.color = "black"
    leftPlan.style.opacity = "0";
    setTimeout(() => {
        leftPlan.style.opacity = "1";
    }, 100);

    rightPlan.style.opacity = "0";
    setTimeout(() => {
        rightPlan.style.opacity = "1";
    }, 100);
})

rightButton.addEventListener("click", function () {
    rightButton.style.backgroundColor = "#2b4eff";
    leftButton.style.color = "black"
    leftButton.style.backgroundColor = "white";
    rightButton.style.color = "white"

    leftPlan.style.opacity = "0";
    setTimeout(() => {
        leftPlan.style.opacity = "1";
    }, 100);

    rightPlan.style.opacity = "0";
    setTimeout(() => {
        rightPlan.style.opacity = "1";
    }, 100);
})

