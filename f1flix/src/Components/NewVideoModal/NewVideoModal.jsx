import React, { useState } from "react";
import { ModalOverlay, ModalContent, ModalTitle, Input, Button, CloseButton } from "./NewVideoModal.styled";
import { useVideoContext } from "../../Contexts/VideoContext";

const NewVideoModal = ({ isOpen, onClose }) => {
  const { addVideo } = useVideoContext();
  const [formData, setFormData] = useState({
    titulo: "",
    categoria: "",
    img: "",
    video: "",
    descricao: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addVideo(formData);
    setFormData({
      titulo: "",
      categoria: "",
      img: "",
      video: "",
      descricao: "",
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>X</CloseButton>
        <ModalTitle>Add New Video</ModalTitle>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="titulo"
            placeholder="Title"
            value={formData.titulo}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="categoria"
            placeholder="Category"
            value={formData.categoria}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="img"
            placeholder="Image URL"
            value={formData.img}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="video"
            placeholder="Video URL"
            value={formData.video}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="descricao"
            placeholder="Description"
            value={formData.descricao}
            onChange={handleChange}
            required
          />
          <Button type="submit">Save Video</Button>
        </form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default NewVideoModal;
