import React, { useState } from "react";
import { ModalOverlay, ModalContent, ModalTitle, Input, Button, CloseButton } from "./EditModal.styled";
import { useVideoContext } from "../../Contexts/VideoContext";

const EditModal = ({ video, isOpen, onClose }) => {
  const { updateVideo } = useVideoContext();
  const [formData, setFormData] = useState({ ...video });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateVideo(video.id, formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>X</CloseButton>
        <ModalTitle>Edit Video</ModalTitle>
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
          <Button type="submit">Save Changes</Button>
        </form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default EditModal;
