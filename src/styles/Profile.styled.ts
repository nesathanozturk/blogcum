import styled from "styled-components";

import { breakpoints } from "../theme";

export const ProfileSection = styled.section`
  padding: 0.2em 0.8em;
  margin-top: 2em;

  @media ${breakpoints.lg} {
    padding-left: 1.6em;
  }
`;
