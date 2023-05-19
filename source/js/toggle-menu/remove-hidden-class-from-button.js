const HIDDEN_CLASS = 'page-header__toggle-menu-button--hidden';

const removeHiddenClassFromButton = (buttonNode) => {
  buttonNode.classList.remove(HIDDEN_CLASS);
};

export { removeHiddenClassFromButton };
