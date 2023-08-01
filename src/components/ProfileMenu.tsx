import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

import { settings } from '../utils/data';

import { IProfileMenuProps } from '../types';

const ProfileMenu: React.FC<IProfileMenuProps> = ({ isUserMenuOpen, handleCloseUserMenu }) => {
 return (
  <>
    <Menu
      sx={{ mt: '45px' }}
      id="menu-appbar"
      anchorEl={isUserMenuOpen}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={Boolean(isUserMenuOpen)}
      onClose={handleCloseUserMenu}
        >
        {settings.map((setting) => (
          <MenuItem key={setting} onClick={handleCloseUserMenu}>
            <Typography textAlign="center">{setting}</Typography>
          </MenuItem>
          ))}
      </Menu>
  </>
  );
};

export default ProfileMenu;