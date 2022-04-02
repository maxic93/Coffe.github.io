//Variables
const btnNav = document.querySelector(".fa-bars")
const nav = document.querySelector(".nav")

//Eventos
btnNav.addEventListener("click", ()=> {
    nav.classList.toggle("show_nav")
    let banner = document.querySelector(".banner_content")
    banner.classList.toggle("banner_noshow")
})