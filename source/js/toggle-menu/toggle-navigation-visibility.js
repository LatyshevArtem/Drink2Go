const NAVIGATION_HIDDEN_CLASS = 'page-header__navigation--hidden';

const navigationNode = document.querySelector('.page-header__navigation');

const toggleNavigationVisibility = () => {
  navigationNode.classList.toggle(NAVIGATION_HIDDEN_CLASS);
}

export { toggleNavigationVisibility }
