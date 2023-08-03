import { styled } from "styled-components";
import { breakpoints } from "../theme";

export const BlogDetailContainer = styled.div`
  padding: 0.2em 0.8em;

  @media ${breakpoints.xl} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 2em;
    text-align: center;
  }
`;

export const BlogImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.4em;
`;

export const Image = styled.img`
  object-fit: cover;
  border-radius: 16px;
`;

export const BlogTitle = styled.h1`
  font-size: 1.6rem;
  letter-spacing: 0.05em;

  @media ${breakpoints.xl} {
    font-size: 2.3rem;
  }
`;

export const Text = styled.p`
  margin-top: 0.8em;
  font-size: 0.8rem;
  font-weight: 600;

  @media ${breakpoints.xl} {
    font-size: 1.1rem;
  }
`;

export const BlogDescription = styled(Text)`
  margin-bottom: 8px;
  line-height: 1.4;
`;

export const BlogAuthor = styled(Text)`
  text-decoration: underline;
`;
