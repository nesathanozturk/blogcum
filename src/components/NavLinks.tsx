import { Box } from "@mui/material";

import { NavbarLink } from "../styles/Header.styled";

import { pages } from "../utils/data";

import { INavLinksProps } from "../types";

const NavLinks: React.FC<INavLinksProps> = ({ handleCloseNavMenu }) => {
  return (
    <>
      <Box
        sx={{ display: { xs: "none", md: "flex", gap: "0.7rem" } }}
        mt={0.5}
        mr={1.2}
      >
        {pages?.map((page) => (
          <NavbarLink
            key={page.name}
            to={page.path}
            onClick={handleCloseNavMenu}
          >
            {page.name}
          </NavbarLink>
        ))}
      </Box>
    </>
  );
};
export default NavLinks;
