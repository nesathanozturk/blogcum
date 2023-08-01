import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

type ProfileMenuProps = {
    settings: string[];
    isUserMenuOpen: null | HTMLElement;
    handleCloseUserMenu: () => void
}

const ProfileMenu: React.FC<ProfileMenuProps> = ({ settings, isUserMenuOpen, handleCloseUserMenu }) => {
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

export default ProfileMenu