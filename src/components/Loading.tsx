import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const Loading = () => {
  return (
    <Box
      sx={{ display: "flex", justifyContext: "center", alignItems: "center" }}
    >
      <CircularProgress color="inherit" />
    </Box>
  );
};

export default Loading;
