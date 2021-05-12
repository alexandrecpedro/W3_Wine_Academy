window.addEventListener('resize', function() {
    if(window.outerWidth < 700) {
        window.resizeTo(700, window.outerHeight);
    }
}, true);

const navSlide = () => {
    const burger = document.querySelector('.menu-burger');
    const nav = document.querySelector('.navmenu');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });
}

navSlide();