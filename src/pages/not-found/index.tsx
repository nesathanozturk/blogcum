import { Box, Typography } from "@mui/material";

import { BtnLink } from "../../styles/Hero.styled";

const NotFoundPage = () => {
  return (
    <Box
      sx={{
        marginTop: "5em",
        textAlign: "center",
      }}
    >
      <Typography variant="h1" component="h1" fontWeight={800} mb={2}>
        Oops, 404
      </Typography>
      <Typography variant="h5" component="h5" fontWeight={600} mb={2}>
        Üzgünüm, aradığınız sayfa bulunamadı!
      </Typography>
      <br />
      <BtnLink to="/">Ana sayfaya dön</BtnLink>
    </Box>
  );
};

export default NotFoundPage;
