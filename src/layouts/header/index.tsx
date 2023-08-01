import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Toolbar from "@mui/material/Toolbar";
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import { Stack } from "@mui/material";

import NavLinks from '../../components/NavLinks';
import MobileMenu from '../../components/MobileMenu';
import ProfileMenu from "../../components/ProfileMenu";

import useToggle from '../../hooks/useToggle';

const Header = () => {
  const { isNavOpen, isUserMenuOpen, handleOpenNavMenu, handleOpenUserMenu, handleCloseNavMenu, handleCloseUserMenu } = useToggle();

 return (
  <AppBar position="static" sx={{ backgroundColor: "transparent", padding: "1em", boxShadow: 0 }}>
    <Container maxWidth="xl">
      <Toolbar disableGutters sx={{ display: "flex", justifyContent: "space-between"}}>
        <Typography variant="h6" noWrap component="a" mt={0.3}
          sx={{
            fontWeight: 700,
            letterSpacing: '.08rem',
            color: '#FFFFFF',
            textDecoration: 'none',
            fontSize: { xs: "1rem", sm: "1.3rem" , md: "1.8rem" }
          }}
        >
          Blogcum
        </Typography>
        <Stack flexDirection="row" sx={{ flexGrow: 0, alignItems:"center" }} gap={1}>
        <NavLinks handleCloseNavMenu={handleCloseNavMenu} />
          <Box sx={{ display: { xs: 'block', md: 'none' }, }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
             <MobileMenu isNavOpen={isNavOpen} handleCloseNavMenu={handleCloseNavMenu} />
            </Box>
          <Tooltip title="Ayarları aç">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Neşathan ÖZTÜRK" src="https://avatars.githubusercontent.com/u/107864503?v=4" />
            </IconButton>
          </Tooltip>
          <ProfileMenu isUserMenuOpen={isUserMenuOpen} handleCloseUserMenu={handleCloseUserMenu} />
        </Stack>
      </Toolbar>
    </Container>
  </AppBar>
  );
};

export default Header;