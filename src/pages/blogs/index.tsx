import Footer from "../../layouts/footer";
import Header from "../../layouts/header";

import PostPreview from "../../components/PostPreview";
import Title from "../../components/Title";

import { Section, BlogContainer } from "../../styles/Blog.styled";

const Blogs = () => {
  return (
    <>
      <Header />
      <Section>
        <Title title="Bloglar" />
        <BlogContainer>
          <PostPreview />
          <PostPreview />
          <PostPreview />
          <PostPreview />
          <PostPreview />
          <PostPreview />
          <PostPreview />
          <PostPreview />
          <PostPreview />
        </BlogContainer>
      </Section>
      <Footer />
    </>
  );
};

export default Blogs;
