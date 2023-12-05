const hamburgerMenu:HTMLDivElement = document.querySelector('.hamburgerMenu');
const hamburgerButton:HTMLDivElement = document.querySelector('.hamburger');

let shown:boolean = false;
hamburgerMenu.style.display = 'none';

hamburgerButton.addEventListener('click', ():void => {
    shown = !shown;

    if(shown) {
        hamburgerMenu.style.display = 'flex';
    }

    else {
        hamburgerMenu.style.display = 'none';
    }
})

window.addEventListener('resize', () => {
    if(window.innerWidth >= window.innerHeight) {
        shown = false;
        hamburgerMenu.style.display = 'none';
    }
})

