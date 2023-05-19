import { removeHiddenClassFromButton } from './remove-hidden-class-from-button.js';
import { getIconUrl } from './get-icon-url.js';
import { changeButtonIcon } from './change-button-icon.js';
import { toggleNavigationVisibility } from './toggle-navigation-visibility.js';

const buttonNode = document.querySelector('.page-header__toggle-menu-button');
const buttonIconNode = buttonNode.querySelector('.page-header__toggle-menu-button-icon');

removeHiddenClassFromButton(buttonNode);
toggleNavigationVisibility();

let isMenuOpened = false;
const onButtonClick = () => {
  const iconUrl = getIconUrl(isMenuOpened);
  changeButtonIcon(buttonIconNode, iconUrl);
  toggleNavigationVisibility();
  isMenuOpened = !isMenuOpened;
}

buttonNode.addEventListener('click', onButtonClick);
