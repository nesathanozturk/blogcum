import { Avatar, Typography, Box, Stack, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";

import AuthContext from "../context/AuthContext";

import useAuthContext from "../hooks/use-context";

import { IAuth } from "../types";

const ProfileBox = () => {
  const { handleSignOut, currentUser } = useAuthContext(AuthContext) as IAuth;

  const { username, email } = currentUser;

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
            alt={username}
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
              {username} | Yazar
            </Typography>
            <Typography component="h5" mb={1} fontWeight={800}>
              {email}
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
          >
            <Button variant="outlined" color="secondary" endIcon={<AddIcon />}>
              Blog Yazısı Ekle
            </Button>
            <Button
              onClick={handleSignOut}
              variant="outlined"
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
