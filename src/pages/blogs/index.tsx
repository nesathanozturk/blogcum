import AddIcon from "@mui/icons-material/Add";
import { Stack, Button, Typography } from "@mui/material";
import { useState } from "react";

import WithComponents from "../../hoc/WithComponents";
import PostPreview from "../../components/PostPreview";
import Title from "../../components/Title";
import BasicModal from "../../components/Modal";

import { Section, BlogContainer } from "../../styles/Blog.styled";

const Blogs = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleModalClose = () => {
    setIsOpen(false);
  };

  const handleModalOpen = () => {
    setIsOpen(true);
  };

  return (
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
      <BasicModal isOpen={isOpen} handleModalClose={handleModalClose} />
    </Section>
  );
};

export default WithComponents(Blogs);
