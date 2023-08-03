import { Box, Typography } from "@mui/material";

import { BtnLink } from "../../styles/Hero.styled";

const NotFoundPage = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <Typography
        component="h1"
        fontWeight={800}
        mb={1}
        sx={{ fontSize: { xs: "3rem", sm: "4rem", md: "5rem" } }}
      >
        Oops, 404!
      </Typography>
      <Typography
        component="p"
        fontWeight={600}
        mb={2}
        sx={{ fontSize: { xs: "1.6rem", sm: "2rem", md: "2.5rem" } }}
      >
        Üzgünüm, aradığınız sayfa bulunamadı!
      </Typography>
      <br />
      <BtnLink to="/">Ana sayfaya dön</BtnLink>
    </Box>
  );
};

export default NotFoundPage;
