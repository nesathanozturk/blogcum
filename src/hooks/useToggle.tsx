import { useState, MouseEvent } from "react"

const useToggle = () => {
    const [isNavOpen, setIsNavOpen] = useState<null | HTMLElement>(null);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState<null | HTMLElement>(null);
  
    const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
      setIsNavOpen(event.currentTarget);
    };
    const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
      setIsUserMenuOpen(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setIsNavOpen(null);
    };
  
    const handleCloseUserMenu = () => {
      setIsUserMenuOpen(null);
    };

  return { isNavOpen, isUserMenuOpen, handleOpenNavMenu, handleOpenUserMenu, handleCloseNavMenu, handleCloseUserMenu }
}

export default useToggle;