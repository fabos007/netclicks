// MENU

const letfMenu = document.querySelector('.left-menu'),
    hamburger = document.querySelector('.hamburger');


//Open, close of the menu 

hamburger.addEventListener('click', () => {
    letfMenu.classList.toggle('openMenu');
    hamburger.classList.toggle('open');
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.left-menu')) {
        letfMenu.classList.remove('openMenu');
        hamburger.classList.remove('open');
    }
})

letfMenu.addEventListener('click', event => {
    const target = event.target;
    const dropdown = target.closest('.dropdown');
    if (dropdown) {
        dropdown.classList.toggle('.active');
    }
});