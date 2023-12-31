import styled from "styled-components";
import { Link } from "react-router-dom";

import { breakpoints } from "../theme";

export const FormContainer = styled.div`
  max-width: 40rem;
  display: flex;
  flex-direction: column;
  margin: 5em auto;
  padding: 2.5em;
  background-color: #1c1b22;
  border-radius: 0.625em;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);

  @media ${breakpoints.lg} {
    margin: 1.7em auto;
  }
`;

export const Title = styled.h2`
  margin-bottom: 1.25em;
  color: #fff;
  font-size: 1.4rem;
  text-align: center;

  @media ${breakpoints.lg} {
    font-size: 1.75rem;
  }
`;

export const FormGroup = styled.div`
  width: 100%;
  margin-bottom: 2em;
`;

export const Label = styled.label`
  display: block;
  color: #fff;
  font-size: 0.9rem;
  font-weight: 800;
  letter-spacing: 0.07rem;

  @media ${breakpoints.lg} {
    font-size: 1.125rem;
  }
`;

export const Input = styled.input`
  width: 100%;
  margin-top: 0.5em;
  padding: 0.938em;
  background-color: #2c2b33;
  color: #fff;
  border: none;
  border-radius: 0.313rem;
  font-size: 0.9rem;
  letter-spacing: 0.07rem;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);

  &::placeholder {
    color: #aaa;
    font-weight: 500;
  }

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0px 0px 5px rgba(0, 123, 255, 0.3);
  }

  @media ${breakpoints.lg} {
    font-size: 1rem;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 0.938em;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 0.313rem;
  font-size: 1rem;
  font-weight: 800;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }

  @media ${breakpoints.lg} {
    font-size: 1.125rem;
  }
`;

export const AccountMessage = styled.p`
  margin-top: 1.6em;
  color: #fff;
  font-size: 0.9rem;
  font-weight: 600;
  text-align: center;

  @media ${breakpoints.lg} {
    font-size: 1rem;
    text-align: left;
  }
`;

export const SignInLink = styled(Link)`
  color: #007bff;
  font-weight: 700;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: #0056b3;
    text-decoration: underline;
  }
`;

export const ErrorMessage = styled.p`
  margin-top: 0.8em;
  color: #dc3545;
  font-size: 0.9rem;
  font-weight: 600;

  @media ${breakpoints.lg} {
    font-size: 1rem;
  }
`;

export const SignInMessage = styled(ErrorMessage)`
  margin-top: 0;
  margin-bottom: 1.5em;
  text-align: center;
`;
