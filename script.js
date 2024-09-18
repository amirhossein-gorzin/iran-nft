const navMenuIconMobile = document.querySelector('.nav__menu-icon-mobile')
const navMenuMobile = document.querySelector('.nav-list')
const navMenuCloseIcon = document.querySelector('.nav__close-icon-mobile')
const navSearchIcon = document.querySelector('.nav__search-icon-mobile')
const searchBoxModal = document.querySelector('.search-box-modal')
const overlay = document.querySelector('.overlay')

function preparingNavBarMobile(){
    const element = document.querySelector('.nav-list__item--active')
    if (innerWidth<992 && element){
        element.classList.remove('nav-list__item--active')
    }
}
function closeMenuMobileAndSearchBox(){
    navMenuMobile.style.right = '-35rem'
    overlay.style.display = 'none'
    navMenuCloseIcon.style.display = 'none'
    searchBoxModal.style.top = '-10rem'
}
window.addEventListener("resize",preparingNavBarMobile)

navMenuIconMobile.addEventListener('click',()=>{
    navMenuMobile.style.right = '0px'
    overlay.style.display = 'block'
    navMenuCloseIcon.style.display = 'block'
})

navMenuCloseIcon.addEventListener('click',closeMenuMobileAndSearchBox)

overlay.addEventListener('click',closeMenuMobileAndSearchBox)

navSearchIcon.addEventListener('click',()=>{
    overlay.style.display = 'block'
    searchBoxModal.style.top = '5rem'
})