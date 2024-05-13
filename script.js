//Menu
const menuIcon = document.querySelector('.menu-icon');
const navMenu = document.querySelector('.nav-menu');
const header = document.querySelector('header');
const navIcon = document.querySelector('.nav-icon');
const navLink = document.querySelectorAll(".nav-link");
const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
const navHeightPx = header.offsetHeight;
const navHeightRem = navHeightPx / rootFontSize;

// Definir altura da navegação em unidades 'rem'
document.documentElement.style.setProperty('--nav-height', `${navHeightRem}rem`);

// Adicionar evento de clique ao ícone do menu
menuIcon.addEventListener('click', toggleMenu);

function toggleMenu() {
    navMenu.classList.toggle('active');
    navIcon.classList.toggle('active');

    navLink.forEach((link) =>{
        link.addEventListener('click', ()=>{
            if (navMenu.classList.contains('active')) {
                navMenu.classList.toggle('active');
                navIcon.classList.toggle('active');
            }
        })
      })
}

//fim menu

//video
const videoWrapper = document.querySelector('.video__wrapper')
const videoPlayer = document.querySelector('#video-player')

videoWrapper.addEventListener('click', videoPlay);

function videoPlay() {
  
    videoPlayer.controls = true;
    videoPlayer.setAttribute('autoplay','');
}