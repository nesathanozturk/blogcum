import { Link } from "react-router-dom";
import styled from "styled-components";

import { breakpoints } from "../theme";

export const Section = styled.section`
  padding: 0.2em 0.8em;
  margin-top: 2em;

  @media ${breakpoints.lg} {
    padding-left: 1.6em;
  }
`;

export const SectionTitle = styled.h2`
  padding-left: 0.8em;
  color: #f32170;
  font-size: 1.5rem;
  font-weight: 700;

  @media ${breakpoints.lg} {
    font-size: 2rem;
    padding-left: 0.45em;
  }
`;

export const BlogContainer = styled.div`
  gap: 2rem;

  @media ${breakpoints.md} {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
`;

export const Post = styled.div`
  padding: 1em;
  color: #fff;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #f8f8f222;
  }
`;

export const ImageWrapper = styled.div`
  height: 200px;
  overflow: hidden;
  border-radius: 8px;
`;

export const PostImage = styled.img`
  width: 100%;
  border-radius: 8px;
`;

export const PostBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1em;
`;

export const PostTitle = styled.h3`
  margin-bottom: 0.3em;
  font-size: 1.5rem;
  font-weight: 700;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const PostDescription = styled.p`
  color: #747474;
  font-weight: 600;
  line-height: 1.2;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const PostAuthor = styled(PostTitle)`
  font-size: 1em;
  margin-bottom: 0.5em;
`;

export const ReadMore = styled(Link)`
  color: #908e9b;
  font-size: 0.9rem;

  &:hover {
    color: #aaa;
    text-decoration: underline;
  }
`;
