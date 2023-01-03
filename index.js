const hamburger = document.getElementById("hamburger")
const navList = document.getElementById("nav-list")
function toggleButton(){
    navList.classList.toggle('show')
}
hamburger.addEventListener('click',toggleButton)
