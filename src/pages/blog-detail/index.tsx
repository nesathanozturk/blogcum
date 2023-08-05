import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

import WithComponents from "../../hoc/WithComponents";

import useBlogContext from "../../hooks/use-blog-context";

import { IBlogs } from "../../types";

import noImage from "../../assets/no-image.png";

import {
  BlogDetailContainer,
  BlogImageWrapper,
  Image,
  BlogTitle,
  BlogDescription,
  BlogAuthor,
} from "../../styles/BlogDetail.styled";

const BlogDetail = () => {
  const { blogs } = useBlogContext() as IBlogs;

  const { id } = useParams<{ id: string }>();

  const blog = blogs?.find((blog) => blog.id === id);

  const image = blog?.image === "" ? noImage : blog?.image;

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <BlogDetailContainer>
      <BlogImageWrapper>
        <Image src={image} alt={blog?.title} />
      </BlogImageWrapper>
      <BlogTitle>{blog?.title}</BlogTitle>
      <BlogDescription>{blog?.description}</BlogDescription>
      <BlogAuthor>Yazar: {blog?.author}</BlogAuthor>
      <Button
        variant="outlined"
        onClick={goBack}
        color="warning"
        sx={{
          marginTop: "1em",
          fontSize: { xs: "0.7rem", sm: "0.8rem", md: "0.9rem" },
        }}
      >
        Geri Dön
      </Button>
    </BlogDetailContainer>
  );
};

export default WithComponents(BlogDetail);
