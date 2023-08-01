import PostPreview from "../../components/PostPreview";

import { Section, SectionTitle, BlogContainer } from "../../styles/Blog.styled";

const Blogs = () => {
  return (
    <Section>
      <SectionTitle>Bloglar</SectionTitle>
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
  );
};

export default Blogs;
