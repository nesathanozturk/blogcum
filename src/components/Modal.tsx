import React from "react";
import { Box, Typography, Avatar, Stack } from "@mui/material";
import Modal from "@mui/material/Modal";

import ModalButton from "./ModalButton";

import useBlogContext from "../hooks/use-blog-context";

import { IBlogs, IModal } from "../types";

import {
  UserBox,
  PostInput,
  UsernameInput,
  Input,
} from "../styles/Blog.styled";

import avatar from "../assets/avatar.webp";

const BasicModal: React.FC<IModal> = ({
  isModalOpen,
  handleModalClose,
  setIsModalOpen,
}) => {
  const {
    addBlog,
    setBlogAuthor,
    setBlogImage,
    setBlogTitle,
    setBlogDescription,
  } = useBlogContext() as IBlogs;

  return (
    <>
      <Modal
        open={isModalOpen}
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
              alt="Kullanıcı fotoğrafı"
              src={avatar}
            />
            <UsernameInput
              type="text"
              placeholder="Kullanıcı adınız"
              onChange={(e) => setBlogAuthor(e.target.value)}
            />
          </UserBox>
          <Stack>
            <Input
              type="text"
              placeholder="Yazı başlığı"
              onChange={(e) => setBlogTitle(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Yazının görsel linki"
              onChange={(e) => setBlogImage(e.target.value)}
            />
          </Stack>
          <PostInput
            placeholder="Ne düşünüyorsunuz?"
            onChange={(e) => setBlogDescription(e.target.value)}
          />
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent="flex-end"
            flexWrap="wrap"
            gap={2}
            mt={3}
          >
            <ModalButton
              handleClick={() => setIsModalOpen(false)}
              bgColor="#434C5A"
              hoverBgColor="#363e49"
              buttonText="İptal et"
            />
            <ModalButton
              handleClick={addBlog}
              bgColor="#51A1BE"
              hoverBgColor="#468fa8"
              buttonText="Oluştur"
            />
          </Stack>
        </Box>
      </Modal>
    </>
  );
};

export default BasicModal;
