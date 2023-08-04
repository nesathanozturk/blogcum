import { useState, MouseEvent } from "react";

const useToggle = () => {
  const [isNavOpen, setIsNavOpen] = useState<null | HTMLElement>(null);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState<null | HTMLElement>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

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

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  return {
    isNavOpen,
    isUserMenuOpen,
    handleOpenNavMenu,
    handleOpenUserMenu,
    handleCloseNavMenu,
    handleCloseUserMenu,
    isModalOpen,
    handleModalClose,
    handleModalOpen,
  };
};

export default useToggle;
