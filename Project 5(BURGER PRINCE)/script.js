const hamburger = document.getElementsByClassName('header-hamburger')[0]
const navbar = document.getElementsByClassName('header-list')[0]

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active')
})