import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";

import useAuthContext from "../hooks/use-auth-context";

import { IProfileMenuProps, IAuth } from "../types";

const ProfileMenu: React.FC<IProfileMenuProps> = ({
  isUserMenuOpen,
  handleCloseUserMenu,
}) => {
  const { handleSignOut } = useAuthContext() as IAuth;

  return (
    <>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={isUserMenuOpen}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(isUserMenuOpen)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem onClick={handleCloseUserMenu}>
          <Typography onClick={handleSignOut} textAlign="center">
            Çıkış Yap
          </Typography>
        </MenuItem>
      </Menu>
    </>
  );
};

export default ProfileMenu;
