import { ReactNode } from "react";

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
  errorMessage: null | string;
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

export interface IModal {
  isModalOpen: boolean;
  handleModalClose: (isModalOpen: boolean) => void;
  setIsModalOpen: (isModalOpen: boolean) => void;
}

export interface IBlog {
  id: string;
  author: string;
  title: string;
  image: string;
  description: string;
}

export interface IBlogs {
  blogs: IBlog[];
  setBlogAuthor: (blogAuthor: string) => void;
  setBlogTitle: (blogTitle: string) => void;
  setBlogImage: (blogImage: string) => void;
  setBlogDescription: (blogDescription: string) => void;
  addBlog: () => void;
}
export interface IBlogProps {
  blog: IBlog;
}

export interface IWithForm {
  handleSignUp: (email: string, password: string) => void;
  handleSignIn: (email: string, password: string) => void;
}

export interface IModalButtonProps {
  handleClick: () => void;
  bgColor: string;
  hoverBgColor: string;
  buttonText: string;
}

export interface Props {
  children?: ReactNode;
}

export interface State {
  hasError: boolean;
}
