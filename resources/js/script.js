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

//TEAM MEMBER PHOTOS
const teamMember = document.querySelectorAll('.team-member-content')
const teamLeft = document.getElementById('team-left')
const teamRight = document.getElementById('team-right')

let teamIdx = 0
let teamInterval = setInterval(runTeam, 3000)

function resetTeamInterval(){
  clearInterval(teamInterval)
  teamInterval = setInterval(runTeam, 3000)
}

function runTeam(){
  teamIdx++;
  if(teamIdx > teamMember.length - 1){
    teamIdx = 0
  }
  updateTeamMember()
}

teamRight.addEventListener('click', () => {
  resetTeamInterval()
  runTeam()
  
})

teamLeft.addEventListener('click', () => {
  resetTeamInterval()
  teamIdx--;
  if(teamIdx < 0){
    teamIdx = teamMember.length-1
  }
  updateTeamMember();
})
// console.log(teamMember[0].clientWidth)

function updateTeamMember(){
  teamMember.forEach(member => {
    member.classList.remove('left')
    member.classList.remove('right')
  })
  if(teamIdx === teamMember.length -1){
    // teamMember[teamIdx-1].classList.remove('left')
    // teamMember[teamMember.length -1].classList.remove('right')
    teamMember[teamMember.length -1].classList.add('left')
    teamMember[0].classList.add('right')
  }else{
    // teamMember[teamIdx-1].classList.remove('left')
    // teamMember[teamIdx].classList.remove('right')
    teamMember[teamIdx].classList.add('left')
    teamMember[teamIdx+1].classList.add('right')
  }
}

// team.style.transform = `translateX(${-teamIdx * (teamMember[0].clientWidth + 10)}px)`