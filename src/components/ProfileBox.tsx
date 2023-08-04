import { Avatar, Typography, Box, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

import { auth } from "../config/firebase";

const ProfileBox = () => {
  const ProfileContainer = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(4),
  }));

  return (
    <>
      <Box
        mt={4}
        sx={{
          borderRadius: "1rem",
          boxShadow: "0 0 5px #f8f8f222",
          textAlign: "center",
        }}
      >
        <ProfileContainer>
          <Avatar
            alt="wqeqwe"
            src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png"
            sx={{ width: 100, height: 100, mb: 2 }}
          />
          <Box mb={2}>
            <Typography
              component="h1"
              mb={1}
              fontWeight={800}
              sx={{ fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.8rem" } }}
            >
              {auth?.currentUser.email}
            </Typography>
            <Typography
              component="h2"
              mb={1}
              fontWeight={800}
              sx={{ fontSize: { xs: "1rem", sm: "1.2rem", md: "1.4rem" } }}
            >
              Yazar
            </Typography>
          </Box>
          <Typography
            variant="body1"
            mb={2}
            fontWeight={600}
            sx={{ fontSize: { sm: "0.96rem", md: "1.1rem" } }}
          >
            Bloguma hoş geldiniz! <br /> Burada sizlerle düşüncelerimi ve
            deneyimlerimi paylaşmaktan büyük bir keyif alıyorum.
          </Typography>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={2}
            mt={2}
            mb={3}
          ></Stack>
        </ProfileContainer>
      </Box>
    </>
  );
};

export default ProfileBox;
