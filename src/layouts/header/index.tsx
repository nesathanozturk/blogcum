import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import { Stack } from "@mui/material";

import ProfileMenu from "../../components/ProfileMenu";
import { StyledToolbar } from "../../styles/Header.styled";

import useToggle from '../../hooks/useToggle';

import { pages } from '../../utils/data';

const Header = () => {
  const { isNavOpen, isUserMenuOpen, handleOpenNavMenu, handleOpenUserMenu, handleCloseNavMenu, handleCloseUserMenu } = useToggle();

 return (
  <AppBar position="static" sx={{ backgroundColor: "transparent", padding: "1em", boxShadow: 0 }}>
    <Container maxWidth="xl">
      <StyledToolbar disableGutters>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          mt={0.3}
          sx={{
            fontWeight: 700,
            letterSpacing: '.08rem',
            color: '#FFFFFF',
            textDecoration: 'none',
            fontSize: { xs: "1rem", sm: "1.3rem" , md: "1.6rem" }
          }}
        >
          Blogcum
        </Typography>
        <Stack flexDirection="row" sx={{ flexGrow: 0, alignItems:"center" }} gap={1}>
          <Box sx={{ display: { xs: "none", md: "flex" } }} mt={0.5} mr={1}>
            {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ color: 'white', fontWeight: 700, letterSpacing: '.08rem', fontSize: { xs: "1rem", md: "0.8rem" }, '&:hover': { color: '#bbb' } }}
                >
                  {page}
                </Button>
              ))}
          </Box>
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
              <Menu
                id="menu-appbar"
                anchorEl={isNavOpen}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(isNavOpen)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          <Tooltip title="Ayarları aç">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Neşathan ÖZTÜRK" src="https://avatars.githubusercontent.com/u/107864503?v=4" />
            </IconButton>
          </Tooltip>
          <ProfileMenu isUserMenuOpen={isUserMenuOpen} handleCloseUserMenu={handleCloseUserMenu} />
        </Stack>
      </StyledToolbar>
    </Container>
  </AppBar>
  );
};

export default Header;