document.addEventListener('DOMContentLoaded', function () {
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

        navLink.forEach((link) => {
            link.addEventListener('click', () => {
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.toggle('active');
                    navIcon.classList.toggle('active');
                }
            })
        })
    }

    // Video
    const videoWrapper = document.querySelector('.video__wrapper')
    const videoPlayer = document.querySelector('#video-player')

    videoWrapper.addEventListener('click', videoPlay);

    function videoPlay() {
        videoPlayer.controls = true;
        videoPlayer.setAttribute('autoplay', '');
    }

    // Section animation
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const children = section.querySelectorAll('*'); // Seleciona todos os elementos filhos da seção
        children.forEach(child => {
            child.setAttribute('data-screen-show', 'false'); // Define o valor inicial como false
        });
    });

    function revealElements(entries) {
        entries.forEach(entry => {
            const isVisible = entry.isIntersecting; // Verifica se o elemento está visível na viewport
            const children = entry.target.querySelectorAll('*'); // Seleciona todos os elementos filhos do elemento alvo
            children.forEach(child => {
                // Define o valor do atributo "data-screen-show" com base na visibilidade do elemento
                child.setAttribute('data-screen-show', isVisible ? 'true' : 'false');
            });
        });
    }

    const observerOptions = {
        root: null, // Usar o viewport como root
        rootMargin: '0px', // Margem zero
        threshold: 0.05 // Quando pelo menos metade do elemento está visível
    };

    const observer = new IntersectionObserver(revealElements, observerOptions);

    // Iterar sobre cada seção
    sections.forEach(section => {
        // Observa cada seção
        observer.observe(section);
    });

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

    const links = document.getElementsByTagName("a");
    //Browse the previously created array
    Array.prototype.forEach.call(links, function (elem) {
        //Get the hyperlink target and if it refers to an id go inside condition
        var elemAttr = elem.getAttribute("href");
        if (elemAttr && elemAttr.includes("#")) {
            //Replace the regular action with a scrolling to target on click
            elem.addEventListener("click", function (ev) {
                ev.preventDefault();
                //Scroll to the target element using replace() and regex to find the href's target id
                document.getElementById(elemAttr.replace(/#/g, "")).scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "nearest"
                });
            });
        }
    });

});
