import { removeClass } from './utils/removeClassFromSlider.js';
import { addClass } from './utils/addClassToSlider.js';

const SLIDER_CLASS_LIST = [
  'slider--flat-white',
  'slider--lavender-latte',
  'slider--espresso',
];

const slider = document.querySelector('.slider');

const handleSlideChange = () => {
  return (evt) => {
    const { activeIndex, previousIndex } = evt;
    const classToRemove = SLIDER_CLASS_LIST[previousIndex];
    const classToAdd = SLIDER_CLASS_LIST[activeIndex];
    removeClass(slider, classToRemove);
    addClass(slider, classToAdd);
  };
};

const renderCustom = (swiper, current, total) => {
  const paginationItem = `
    <li class="indicators-list__item">
      <button class="indicators-list__button" type="button">
        <span class="visually-hidden">3 слайд</span>
      </button>
    </li>
  `;

  const activePaginationItem = `
    <li class="indicators-list__item">
      <button class="indicators-list__button indicators-list__button--active" type="button">
        <span class="visually-hidden">3 слайд</span>
      </button>
    </li>
  `;

  const customPagination = [];
  for (let i = 0; i < total; i++) {
    const paginationItemToPush = (current - 1) === i ? activePaginationItem : paginationItem;
    customPagination.push(paginationItemToPush);
  }

  return customPagination.join('');
};

new Swiper(slider, {
  navigation: {
    prevEl: '.slider__button--prev',
    nextEl: '.slider__button--next',
  },
  pagination: {
    el: '.slider__indicators-list',
    type: 'custom',
    bulletClass: 'indicators-list__item',
    clickable: true,
    renderCustom,
    },
  on: {
    slidePrevTransitionStart: handleSlideChange(),
    slideNextTransitionStart: handleSlideChange(),
  },
});
