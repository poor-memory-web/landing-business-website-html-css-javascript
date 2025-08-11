let menu = document.querySelector(".menu")
let menuLinkActive = document.querySelector(".menu__link--active")
let menuBtn = document.querySelector(".header__icon")
let menuBtnIcon = document.querySelector(".header__icon i")

menuBtn.addEventListener("click", function(){
    if(menuBtnIcon.classList.contains("fa-bars")){
        menu.style.left = "0"
        menuLinkActive.style.left = "56px"
        menuBtnIcon.classList = "fa fa-times"
    }
    else{
        menu.style.left = "-256px"
        menuLinkActive.style.left = "-8rem"
        menuBtnIcon.classList = "fa fa-bars"
    }
})