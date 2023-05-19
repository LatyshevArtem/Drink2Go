const OPEN_MENU_ICON_URL = 'images/icons/stack.svg#open-menu-icon';
const CLOSE_MENU_ICON_URL = 'images/icons/stack.svg#close-menu-icon';

const getIconUrl = (isMenuOpened) => isMenuOpened ? CLOSE_MENU_ICON_URL : OPEN_MENU_ICON_URL;

export { getIconUrl };
