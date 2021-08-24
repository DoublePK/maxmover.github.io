const header = document.querySelector('.header');
const headerLi = document.querySelector('.header-ul');
const headerLogo = document.getElementById('header-logo');
const hamburger = document.querySelector('.hamburger')
const hamburgerClose = document.querySelector('.nav-close')
const mobileNav = document.querySelector('.header-mobile')

const home = document.querySelector('.home')

window.addEventListener('scroll', fixNav);
window.addEventListener('scroll', navShadow)

hamburger.addEventListener('click', () => {
  mobileNav.classList.remove('close')
  mobileNav.classList.add('open')
} )
hamburgerClose.addEventListener('click', () => {
  mobileNav.classList.remove('open')
  mobileNav.classList.add('close')
} )

function fixNav(){
  if(window.scrollY > header.offsetHeight){
    header.style.backgroundColor = '#fff';
    headerLi.classList.add('dark')
    header.classList.add('scroll')
    headerLogo.innerHTML = `<img src="././resources/img/logo/logo-dark.png" alt="SOLO_logo">`;
  }else{
    header.style.backgroundColor = 'transparent';
    headerLi.classList.remove('dark')
    header.classList.remove('scroll')
    headerLogo.innerHTML = `<img src="././resources/img/logo/logo.png" alt="SOLO_logo">`;
  }
}

function navShadow(){
  if(window.scrollY > home.offsetHeight){
    header.style.boxShadow = '0 1px 5px rgba(0, 0, 0, 0.3)';
  }else{
    header.style.boxShadow = 'none';
  }
}