export interface IProfileMenuProps {
  isUserMenuOpen: HTMLElement | null;
  handleCloseUserMenu: () => void;
}

export interface IMobileMenuProps {
  isNavOpen: HTMLElement | null;
  handleCloseNavMenu: () => void;
}

export interface INavLinksProps {
  handleCloseNavMenu: () => void;
}

export interface ITitle {
  title: string;
}

export interface IForm {
  username: string;
  email: string;
  password: string;
}

export interface IAuth {
  handleSignUp: (email: string, password: string) => void;
  handleSignIn: (email: string, password: string) => void;
  handleSignOut: () => void;
}
