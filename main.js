function toggleMenu() {
    console.log("Function called")
    let links = document.querySelector("#nav-links");
    let nav = document.querySelector(".top-nav");
    let menuIcon = document.querySelector("i");
    if (links.classList.contains("active") && nav.classList.contains("active")){
        links.classList.remove("active");
        nav.classList.remove("active");
        menuIcon.classList.replace("fa-xmark", "fa-bars");
    }
    else{
        links.classList.add("active");
        nav.classList.add("active");
        menuIcon.classList.replace("fa-bars", "fa-xmark");
    }
}

menuButton = document.querySelector("#menu-icon");
menuButton.addEventListener("click", toggleMenu);
console.log(menuButton)