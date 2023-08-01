import { Box, Button } from "@mui/material"

import { pages } from "../utils/data"

import { INavLinksProps } from "../types"

const NavLinks: React.FC<INavLinksProps> = ({ handleCloseNavMenu }) => {
  return (
    <>
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
    </>
  );
};

export default NavLinks;