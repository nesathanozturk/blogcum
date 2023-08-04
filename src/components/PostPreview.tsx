import { Link } from "react-router-dom";

import { IBlogProps } from "../types";

import noImage from "../assets/no-image.png";

import {
  Post,
  ImageWrapper,
  PostImage,
  PostTitle,
  PostDescription,
  PostBodyContainer,
  PostAuthor,
  ReadMore,
} from "../styles/Blog.styled";

const PostPreview: React.FC<IBlogProps> = ({ blog }) => {
  const image = blog.image === "" ? noImage : blog.image;

  return (
    <Link to={`${blog?.id}`} style={{ textDecoration: "none" }}>
      <Post>
        <ImageWrapper>
          <PostImage src={image} alt={blog?.title} />
        </ImageWrapper>
        <PostBodyContainer>
          <div>
            <PostTitle>{blog?.title}</PostTitle>
            <PostDescription>{blog?.description}</PostDescription>
          </div>
          <div>
            <PostAuthor>{blog?.author}</PostAuthor>
            <ReadMore to={`${blog?.id}`}>Read More</ReadMore>
          </div>
        </PostBodyContainer>
      </Post>
    </Link>
  );
};

export default PostPreview;
