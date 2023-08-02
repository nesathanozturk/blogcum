import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #f32170;
  }
`;

export const NavbarMobileLink = styled(NavbarLink)`
  width: 100%;
  color: #000;
  font-size: 1rem;
  font-weight: 500;
`;
