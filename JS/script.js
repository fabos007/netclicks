// MENU

const leftMenu = document.querySelector('.left-menu'),
    hamburger = document.querySelector('.hamburger'),
    tvShows = document.querySelector('.container'),
    tvCard = document.querySelectorAll('.tv-card__img')


//Open, close of the menu 

hamburger.addEventListener('click', () => {
    leftMenu.classList.toggle('openMenu');
    hamburger.classList.toggle('open');
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.left-menu')) {
        leftMenu.classList.remove('openMenu');
        hamburger.classList.remove('open');
    }
})

leftMenu.addEventListener('click', event => {
    const target = event.target;
    const dropdown = target.closest('.dropdown');
    if (dropdown) {
        dropdown.classList.toggle('active');
        leftMenu.classList.add('openMenu');
        hamburger.classList.add('open');
    }
});

// tvShows.forEach(item => item.addEventListener('mouseover', (e) => {

//     if (e.target.classList.contains('tv-card__img')) {
//         console.log(item)

//     }
// }))


tvCard.forEach(img => {
    const imgSrc = img.src;
    const imgAtr = img.getAttribute('data-backdrop');
    img.addEventListener('mouseover', () => {
        img.src = imgAtr;
    });
    img.addEventListener('mouseleave', () => {
        img.src = imgSrc;
    })
});