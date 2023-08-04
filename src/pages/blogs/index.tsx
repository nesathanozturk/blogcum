import AddIcon from "@mui/icons-material/Add";
import { Stack, Button, Typography } from "@mui/material";
import { Toaster } from "react-hot-toast";

import WithComponents from "../../hoc/WithComponents";

import PostPreview from "../../components/PostPreview";
import Title from "../../components/Title";
import BasicModal from "../../components/Modal";

import BlogContext from "../../context/BlogContext";

import useBlogContext from "../../hooks/use-blog-context";
import useToggle from "../../hooks/use-toggle";

import { IBlogs } from "../../types";

import { Section, BlogContainer } from "../../styles/Blog.styled";

const Blogs = () => {
  const { blogs } = useBlogContext(BlogContext) as IBlogs;

  const { isModalOpen, handleModalOpen, handleModalClose } = useToggle();

  return (
    <>
      <Section>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
        >
          <Title title="Bloglar" />
          <Button
            onClick={handleModalOpen}
            variant="outlined"
            color="secondary"
            endIcon={<AddIcon />}
            sx={{
              marginBottom: { xs: "1em", sm: "1.7em", md: "1.8em" },
              marginRight: "1.4em",
              marginLeft: { xs: "1.2em" },
            }}
          >
            <Typography
              component="p"
              sx={{
                marginTop: "0.2em",
                fontSize: { xs: "0.8rem", sm: "0.9rem" },
              }}
            >
              Yazı Ekle
            </Typography>
          </Button>
        </Stack>
        <BlogContainer>
          {blogs?.length < 0 ? (
            <Typography
              component="p"
              sx={{
                marginTop: "0.2em",
                fontSize: { xs: "0.8rem", sm: "0.9rem" },
              }}
            >
              Henüz yazı eklenmemiş.
            </Typography>
          ) : (
            blogs?.map((blog) => <PostPreview key={blog.id} blog={blog} />)
          )}
        </BlogContainer>
        <BasicModal
          isModalOpen={isModalOpen}
          handleModalClose={handleModalClose}
        />
      </Section>
      <Toaster />
    </>
  );
};

export default WithComponents(Blogs);
