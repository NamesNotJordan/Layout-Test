const modal = document.querySelector(".modal");
const modalText = document.querySelector(".modal-text")
const menuButton = document.querySelector("#menu-icon");
const selectElem = document.querySelector("#select-box");
const closeModalBtn = document.querySelector(".close-button");
const selectOptions = document.getElementsByClassName("option");

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
function openDialog(){
    let itemText = selectElem.options[selectElem.selectedIndex].text;
    modalText.textContent = itemText;
    modal.showModal();
}

for (let i = 0; i < selectOptions.length; i++) {
    selectOptions[i].addEventListener("click",openDialog);
    
}

closeModalBtn.addEventListener("click", ()=>{modal.close()})
menuButton.addEventListener("click", toggleMenu);
