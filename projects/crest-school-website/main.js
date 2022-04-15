const hamburger = document.querySelector('.hamburger')
const navbar = document.querySelector('.navbar')

hamburger.addEventListener('click', handleClickHamburger)

function handleClickHamburger() {
  navbar.classList.contains('active') ? navbar.classList.remove('active') : navbar.classList.add('active')
}