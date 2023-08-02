import WithComponents from "../../hoc/WithComponents";
import PostPreview from "../../components/PostPreview";
import Title from "../../components/Title";

import { Section, BlogContainer } from "../../styles/Blog.styled";

const Blogs = () => {
  return (
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
  );
};

export default WithComponents(Blogs);
