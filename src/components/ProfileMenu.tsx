import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

import { IProfileMenuProps } from "../types";

const ProfileMenu: React.FC<IProfileMenuProps> = ({
  isUserMenuOpen,
  handleCloseUserMenu,
}) => {
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
          <Link style={{ color: "#000", textDecoration: "none" }} to="/profile">
            Profil
          </Link>
        </MenuItem>
        <MenuItem onClick={handleCloseUserMenu}>
          <Typography textAlign="center">Çıkış Yap</Typography>
        </MenuItem>
      </Menu>
    </>
  );
};

export default ProfileMenu;
