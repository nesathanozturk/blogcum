import { Avatar, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

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
          border: "1px solid #f8f8f222",
          borderRadius: "1rem",
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
        </ProfileContainer>
      </Box>
    </>
  );
};

export default ProfileBox;
