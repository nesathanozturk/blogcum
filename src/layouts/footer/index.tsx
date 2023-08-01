import { Box, Link, Typography } from '@mui/material';

const Footer = () => {
  return (
   <Box sx={{ marginTop: "5em", padding: "1em 0", fontSize: { sm: "0.7rem", md: "0.9rem" }, textAlign: "center" }}>
    <Typography component="p">
      Made with ❤️ by{" "}
      <Link
        href="https://www.github.com/nesathanozturk"
        rel="noopener noreferrer"
        target="_blank"
        sx={{ 
          color: "#fff",
           textDecoration: "underline",
            fontWeight: 700,
             "&:hover": {
               color: "#908e9b",
               transition: "color 0.2s linear",
              } 
              }}
      >
        Neşathan Öztürk
      </Link>
    </Typography>
 </Box>
  )
}

export default Footer;