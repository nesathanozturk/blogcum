import { useParams } from "react-router-dom";

import WithComponents from "../../hoc/WithComponents";

import BlogContext from "../../context/BlogContext";

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
  const { blogs } = useBlogContext(BlogContext) as IBlogs;

  const { id } = useParams<{ id: string }>();

  const blog = blogs?.find((blog) => blog.id === id);

  const image = blog?.image === "" ? noImage : blog?.image;

  return (
    <BlogDetailContainer>
      <BlogImageWrapper>
        <Image src={image} alt={blog?.title} />
      </BlogImageWrapper>
      <BlogTitle>{blog?.title}</BlogTitle>
      <BlogDescription>{blog?.description}</BlogDescription>
      <BlogAuthor>Yazar: {blog?.author}</BlogAuthor>
    </BlogDetailContainer>
  );
};

export default WithComponents(BlogDetail);
