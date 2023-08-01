import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { pages } from '../utils/data';

import { IMobileMenuProps } from '../types';
import { NavbarLink } from '../styles/Header.styled';

const MobileMenu: React.FC<IMobileMenuProps> = ({ isNavOpen, handleCloseNavMenu }) => {
  return (
    <>
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
      sx={{ display: { xs: 'block', md: 'none' } }}
       >
        {pages.map((page) => (
         <MenuItem key={page.name} onClick={handleCloseNavMenu}>
            <NavbarLink to={page.path}>{page.name}</NavbarLink>
         </MenuItem>
        ))}
     </Menu>
    </>
  );
};

export default MobileMenu;