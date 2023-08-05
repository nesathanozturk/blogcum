import styled from "styled-components";

import { breakpoints } from "../theme";

export const Container = styled.div`
  width: min(75rem, 100%);
  margin: 0 auto;
  padding: 0 1.25em;
`;

export const PageContainer = styled.section`
  padding: 0.2em 0.8em;

  @media ${breakpoints.lg} {
    padding-left: 1.6em;
  }
`;

export const ErrorPageContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Poppins", sans-serif;
`;

export const ErrorHeading = styled.h1`
  color: #ff4f4f;
  font-size: 3rem;
`;

export const ErrorMessage = styled.p`
  font-size: 1.5rem;
`;
