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

export interface IFormProp {
  handleForm: (email: string, password: string) => void;
  formTitle: string;
  altMessage: string;
  link: string;
  linkText: string;
}

export interface ISignUpFunction {
  handleSignUp: (email: string, password: string) => void;
}
export interface ISignInFunction {
  handleSignIn: (email: string, password: string) => void;
}
