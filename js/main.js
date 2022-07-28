var elHambutgerBtn = document.querySelector(".site-header__menu-btn");
var elSiteHeader = document.querySelector(".site-header");

elHambutgerBtn.addEventListener("click", function(){
    elSiteHeader.classList.toggle("site-header--open")
})