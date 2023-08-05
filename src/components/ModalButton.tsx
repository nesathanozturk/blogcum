import { Button } from "@mui/material";

import { IModalButtonProps } from "../types";

const ModalButton: React.FC<IModalButtonProps> = ({
  handleClick,
  bgColor,
  hoverBgColor,
  buttonText,
}) => {
  return (
    <>
      <Button
        onClick={handleClick}
        variant="contained"
        sx={{
          backgroundColor: bgColor,
          fontWeight: 600,
          padding: "0.5em 1em",
          "&:hover": { backgroundColor: hoverBgColor },
        }}
      >
        {buttonText}
      </Button>
    </>
  );
};

export default ModalButton;
