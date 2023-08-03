import WithComponents from "../../hoc/WithComponents";

import {
  BlogDetailContainer,
  BlogImageWrapper,
  Image,
  BlogTitle,
  BlogDescription,
  BlogAuthor,
} from "../../styles/BlogDetail";

const BlogDetail = () => {
  return (
    <BlogDetailContainer>
      <BlogImageWrapper>
        <Image src="https://picsum.photos/960/400" alt="wqqweew" />
      </BlogImageWrapper>
      <BlogTitle>Denizler</BlogTitle>
      <BlogDescription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        beatae inventore molestias repellendus autem! Sed velit animi quaerat
        odit consequuntur!
      </BlogDescription>
      <BlogAuthor>Yazar: nesathanozturk</BlogAuthor>
    </BlogDetailContainer>
  );
};

export default WithComponents(BlogDetail);
