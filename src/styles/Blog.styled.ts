import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box } from "@mui/material";

import { GradientText } from "./Hero.styled";
import { PageContainer } from "./Container.styled";

import { breakpoints } from "../theme";

export const Section = styled(PageContainer)`
  margin-top: 2em;
`;

export const SectionTitle = styled(GradientText)`
  margin-bottom: 0.5em;
  padding-left: 0.8em;
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
  border-radius: 0.8rem;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #f8f8f222;
  }
`;

export const ImageWrapper = styled.div`
  overflow: hidden;
  border-radius: 0.5rem;

  @media ${breakpoints.xl} {
    height: 12.5rem;
  }
`;

export const PostImage = styled.img`
  width: 100%;
  border-radius: 0.5rem;
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
  letter-spacing: 0.02rem;
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

export const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "0.625rem",
  marginBottom: "1.25em",
});

export const PostInput = styled.textarea`
  width: 100%;
  margin-top: 1em;
  padding: 1em;
  background-color: #333;
  color: #fff;
  font-size: 1rem;
  border: 1px solid #444;
  border-radius: 0.25rem;
  resize: none;
  min-height: 9.375rem;
  outline: none;
`;

export const Input = styled.input`
  width: 100%;
  margin-bottom: 0.5em;
  padding: 0.8em 1em;
  background-color: #333;
  color: #fff;
  font-size: 0.9rem;
  border: 1px solid #444;
  border-radius: 0.25rem;
  outline: none;
`;

export const UsernameInput = styled(Input)`
  padding: 0.7em 1em;
  margin-bottom: 0;

  @media ${breakpoints.sm} {
    width: 11rem;
  }
`;
