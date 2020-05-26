const leftMenu = document.querySelector('.left-menu'),
    hamburger = document.querySelector('.hamburger'),
    tvCard = document.querySelectorAll('.tv-card__img'),
    tvShowList = document.querySelector('.tv-shows__list'),
    modal = document.querySelector('.modal');

const DBService = class {
    getData = async (url) => {
        const res = await fetch(url);
        if (res.ok) {
            return res.json();
        } else {
            throw new Error(`Didn't get any data from address ${url}`)
        }
    }

    getTestData = async () => {
        return await this.getData('test.json')
    }
}
const renderCard = response => {
    tvShowList.textContent = '';

    response.results.forEach(item => {
        const card = document.createElement('li');
        card.classList.add('tv-shows__item');
        card.innerHTML = `
        <a href="#" class="tv-card">
            <span class="tv-card__vote">7.4</span>
            <img class="tv-card__img"
                src="https://image.tmdb.org/t/p/w185_and_h278_bestv2/fhV9ckyBko1ZejEEmwdiXG8YMy5.jpg"
                data-backdrop="https://image.tmdb.org/t/p/w185_and_h278_bestv2/AdJgkXb8oLI8e4rsk8XzkvABIuw.jpg"
                alt="Звёздные войны: Повстанцы">
            <h4 class="tv-card__head">Звёздные войны: Повстанцы</h4>
        </a>
        `
        tvShowList.append(card);
    })
}
new DBService().getTestData().then(renderCard);


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

//card change on mouseover
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

//open modal window 

tvShowList.addEventListener('click', (e) => {
    event.preventDefault();
    const target = e.target;
    const card = target.closest('.tv-card');
    if (card) {
        document.body.style.overflow = 'hidden';
        modal.classList.remove('hide')
    }

})

//close modal 

modal.addEventListener('click', (e) => {
    if (event.target.closest('.cross') ||
        event.target.classList.contains('modal')) {
        document.body.style.overflow = '';
        modal.classList.add('hide')
    }
})