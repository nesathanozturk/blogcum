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

const PostPreview = () => {
  return (
    <>
      <Post>
        <ImageWrapper>
          <PostImage
            src="https://picsum.photos/200/300?"
            alt="Blog Card Image"
          />
        </ImageWrapper>
        <PostBodyContainer>
          <div>
            <PostTitle>Denizler</PostTitle>
            <PostDescription>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem,
              ut!
            </PostDescription>
          </div>
          <div>
            <PostAuthor>Neşathan Öztürk</PostAuthor>
            <ReadMore to="/">Read More</ReadMore>
          </div>
        </PostBodyContainer>
      </Post>
    </>
  );
};

export default PostPreview;
