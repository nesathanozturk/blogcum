export interface IProfileMenuProps { 
  isUserMenuOpen: HTMLElement | null;
  handleCloseUserMenu: () => void;
};

export interface IMobileMenuProps {
  isNavOpen: HTMLElement | null;
  handleCloseNavMenu: () => void;
};

export interface INavLinksProps {
  handleCloseNavMenu: () => void;
};

export interface ITitle {
  title: string;
}