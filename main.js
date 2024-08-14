function toggleMenu() {
    console.log("Function called")
    let links = document.querySelector("#nav-links");
    let nav = document.querySelector(".top-nav");
    if (links.classList.contains("active") && nav.classList.contains("active")){
        links.classList.remove("active");
        nav.classList.remove("active");
    }
    else{
        links.classList.add("active");
        nav.classList.add("active");
    }
}

menuButton = document.querySelector("#menu-icon");
menuButton.addEventListener("click", toggleMenu);
console.log(menuButton)