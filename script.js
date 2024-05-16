document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const navMenu = document.querySelector('.nav-menu');
    const header = document.querySelector('header');
    const navIcon = document.querySelector('.nav-icon');
    const navLink = document.querySelectorAll(".nav-link");
    const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    const navHeightPx = header.offsetHeight;
    const navHeightRem = navHeightPx / rootFontSize;

 
    document.documentElement.style.setProperty('--nav-height', `${navHeightRem}rem`);

    menuIcon.addEventListener('click', toggleMenu);

    function toggleMenu() {
        navMenu.classList.toggle('active');
        navIcon.classList.toggle('active');

        navLink.forEach((link) => {
            link.addEventListener('click', () => {
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.toggle('active');
                    navIcon.classList.toggle('active');
                }
            })
        })
    }

// section animation

    const sections = document.querySelectorAll('.wrapper');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {

                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0rem)';
            } else {

                entry.target.style.opacity = 0;
                entry.target.style.transform = 'translateY(var(--mb-xl))';
            }
        });
    });

    sections.forEach(section => {
        observer.observe(section);
    });



    // Video
    const videoWrapper = document.querySelector('.video__wrapper')
    const videoPlayer = document.querySelector('#video-player')

    videoWrapper.addEventListener('click', videoPlay);

    function videoPlay() {
        videoPlayer.controls = true;
        videoPlayer.setAttribute('autoplay', '');
    }

    // Clientes animation
    const scrollers = document.querySelectorAll(".scroller-wrapper");

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        addAnimation()
    }

    function addAnimation() {
        scrollers.forEach((scroller) => {
            scroller.setAttribute("data-animated", true)
        });
    }


    // remover # da URL
    const links = document.getElementsByTagName("a");
   
    Array.prototype.forEach.call(links, function (elem) {
        
        var elemAttr = elem.getAttribute("href");
        if (elemAttr && elemAttr.includes("#")) {
          
            elem.addEventListener("click", function (ev) {
                ev.preventDefault();
                
                document.getElementById(elemAttr.replace(/#/g, "")).scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "nearest"
                });
            });
        }
    });

});
