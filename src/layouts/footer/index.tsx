import { Box, Typography } from '@mui/material';

import { StyledLink } from '../../styles/Footer.styled';

const Footer = () => {
  return (
   <Box sx={{ marginTop: "7em", fontSize: "0.9rem", textAlign: "center", fontWeigth: 600 }}>
   <Typography component="p">
     Made with ❤️ by{" "}
     <StyledLink
       to="https://www.github.com/nesathanozturk"
       rel="noopener noreferrer"
       target="_blank"
     >
       Neşathan Öztürk
     </StyledLink>
   </Typography>
 </Box>
  )
}

export default Footer;