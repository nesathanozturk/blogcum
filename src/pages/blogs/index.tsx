import AddIcon from "@mui/icons-material/Add";
import { Stack, Button, Typography } from "@mui/material";

import WithComponents from "../../hoc/WithComponents";
import PostPreview from "../../components/PostPreview";
import Title from "../../components/Title";

import { Section, BlogContainer } from "../../styles/Blog.styled";

const Blogs = () => {
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
    </Section>
  );
};

export default WithComponents(Blogs);
