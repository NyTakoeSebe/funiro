const headerDropdownButtons = document.querySelectorAll('.header__dropdown-title');
const headerDropdownList = document.querySelectorAll('.header__dropdown-list');

headerDropdownButtons.forEach(button => {
  button.addEventListener('click', e => {
    if(document.querySelectorAll('.header__item-dropdown.active')) {
      document.querySelectorAll('.header__item-dropdown.active').forEach(elem => elem.classList.remove('active'));
    }

    button.closest('.header__item-dropdown').classList.add('active');
    button.closest('.header__item-dropdown').classList.add('open');
  });
});

document.addEventListener('click', e => {
  if(!e.target.closest('.header__item-dropdown')) {
    document.querySelectorAll('.header__item-dropdown.active').forEach(elem => elem.classList.remove('active'));
  }
})

const introSlider = new Swiper('.intro__slider', {
  loop: true,
  slidesPerView: 3,
  slidesPerView: "auto",
  spaceBetween: 32,
  slideActiveClass: 'intro__slider-active',
  slidesOffsetBefore: 630,
  pagination: {
    el: '.intro__slider-pagination',
    clickable: 'true'
  },
  navigation: {
    nextEl: '.intro__slider-button-next',
    prevEl: '.intro__slider-button-prev',
  }
});

introSlider.on('slideChange', () => {
  const slideDesc = document.querySelectorAll('.intro__slide-desc');
  const activeSlide = document.querySelector('.swiper-slide-next');

  slideDesc.forEach(elem => {
    if(!elem.classList.contains('hide')) {
      elem.classList.add('hide');
    }
  })

  activeSlide.querySelector('.intro__slide-desc').classList.remove('hide');
});