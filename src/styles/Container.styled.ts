import styled from "styled-components";

import { breakpoints } from "../theme";

export const Container = styled.div`
  width: min(75rem, 100%);
  margin: 0 auto;
  padding: 0 1.25em;
`;

export const PageContainer = styled.section`
  padding: 0.2em 0.8em;
  margin-top: 2em;

  @media ${breakpoints.lg} {
    padding-left: 1.6em;
  }
`;
