let menuToggle = document.querySelector('.toggle')
let listMenu = document.querySelector('.list')

menuToggle.onclick = () => {
    menuToggle.classList.toggle('active')
    listMenu.classList.toggle('active')
}