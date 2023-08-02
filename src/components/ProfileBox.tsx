import { Avatar, Typography, Box, Stack, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import LogoutIcon from "@mui/icons-material/Logout";

import AuthContext from "../context/AuthContext";

import useAuthContext from "../hooks/use-context";

import { IAuth } from "../types";

const ProfileBox = () => {
  const { handleSignOut } = useAuthContext(AuthContext) as IAuth;

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
          boxShadow: "0 0 10px #f8f8f222",
          textAlign: "center",
        }}
      >
        <ProfileContainer>
          <Avatar
            alt="Neşathan Öztürk"
            src="https://avatars.githubusercontent.com/u/107864503?v=4"
            sx={{ width: 100, height: 100, mb: 2 }}
          />
          <Typography
            component="h1"
            mb={2}
            fontWeight={800}
            sx={{ fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.8rem" } }}
          >
            Neşathan Öztürk
          </Typography>
          <Typography
            component="h2"
            mb={2}
            fontWeight={800}
            sx={{ fontSize: { sm: "1.2rem", md: "1.5rem" } }}
          >
            Yazar
          </Typography>
          <Typography
            variant="body1"
            mb={2}
            fontWeight={600}
            sx={{ fontSize: { sm: "0.96rem", md: "1.1rem" } }}
          >
            Bloguma hoş geldiniz! Burada sizlerle düşüncelerimi ve deneyimlerimi
            paylaşmaktan büyük bir keyif alıyorum.
          </Typography>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={2}
            mt={2}
            mb={3}
          >
            <Button variant="contained" color="success">
              Diğer Bloglara Bak
            </Button>
            <Button variant="contained" endIcon={<AddIcon />}>
              Blog Yazısı Ekle
            </Button>
            <Button
              onClick={handleSignOut}
              variant="contained"
              color="error"
              endIcon={<LogoutIcon />}
            >
              Çıkış Yap
            </Button>
          </Stack>
        </ProfileContainer>
      </Box>
    </>
  );
};

export default ProfileBox;
