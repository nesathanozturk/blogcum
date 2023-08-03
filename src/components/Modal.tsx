import { Box, Typography, Avatar, Stack, Button } from "@mui/material";
import Modal from "@mui/material/Modal";

import { IModal } from "../types";

import { UserBox, PostInput, Input } from "../styles/Blog.styled";

const BasicModal: React.FC<IModal> = ({ isOpen, handleModalClose }) => {
  return (
    <>
      <Modal
        open={isOpen}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingInline: { xs: "1em" },
        }}
      >
        <Box
          width={600}
          minHeight={300}
          p={3}
          borderRadius={1}
          sx={{ backgroundColor: "#222222", color: "#FFF" }}
        >
          <Typography
            id="modal-modal-title"
            variant="h5"
            color="white"
            textAlign="center"
            fontWeight={800}
            mb={2}
          >
            Yazı oluştur
          </Typography>
          <UserBox sx={{ cursor: "pointer" }}>
            <Avatar
              sx={{ width: 30, height: 30 }}
              alt="Neşathan Öztürk"
              src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png"
            />
            <Input type="text" placeholder="Kullanıcı adınız" />
          </UserBox>
          <input type="file" />
          <PostInput placeholder="Ne düşünüyorsunuz?" />
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent="flex-end"
            flexWrap="wrap"
            gap={2}
            mt={3}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#434C5A",
                fontWeight: 600,
                padding: "0.5em 1em",
                "&:hover": { backgroundColor: "#363e49" },
              }}
            >
              İptal et
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#51A1BE",
                fontWeight: 600,
                padding: "0.5em 1em",
                "&:hover": { backgroundColor: "#468fa8" },
              }}
            >
              Oluştur
            </Button>
          </Stack>
        </Box>
      </Modal>
    </>
  );
};

export default BasicModal;
