const header = document.querySelector('header');

const stickHeader = () => {
    const scroll = window.scrollY;

    if (scroll > 0) {
        header.classList.add('active');
    }
    else {
        header.classList.remove('active');
    }

}

window.addEventListener('scroll', stickHeader)

const menu = document.querySelector('.menu');
const burgerButton = document.querySelector('.burger');

burgerButton.addEventListener('click', () => {
    burgerButton.classList.toggle('active');
    menu.classList.toggle('active');
})

const menuLinks = document.querySelectorAll('.menu__link');

menuLinks.forEach(link => link.addEventListener('click', (e) => {
    const key = e.target.dataset.key;

    const section = document.querySelector(`.${key}`).getBoundingClientRect().top + window.pageYOffset - 110;

    menu.classList.remove('active');
    burgerButton.classList.remove('active');

    window.scrollTo({top: section, behavior: 'smooth'});
}))


