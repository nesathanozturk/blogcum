import { Avatar, Typography, Box, Stack, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

import AddIcon from "@mui/icons-material/Add";
import LogoutIcon from "@mui/icons-material/Logout";

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
          <Typography variant="h4" component="h1" mb={2} fontWeight={800}>
            Neşathan Öztürk
          </Typography>
          <Typography variant="h5" mb={2} fontWeight={800}>
            Yazar
          </Typography>
          <Typography variant="body1" mb={2} fontWeight={600}>
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
          </Stack>
          <Button variant="contained" color="error" endIcon={<LogoutIcon />}>
            Çıkış Yap
          </Button>
        </ProfileContainer>
      </Box>
    </>
  );
};

export default ProfileBox;