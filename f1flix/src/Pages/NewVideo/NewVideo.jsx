import React, { useState } from "react";
import { useVideoContext } from "../../Contexts/VideoContext";
import {
  FormContainer,
  Input,
  Textarea,
  Button,
  FormTitle,
} from "./NewVideo.styled";

const NewVideo = () => {
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
  };

  const handleReset = () => {
    setFormData({
      titulo: "",
      categoria: "",
      img: "",
      video: "",
      descricao: "",
    });
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormTitle>Add New Video</FormTitle>
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
        placeholder="URL of the Image"
        value={formData.img}
        onChange={handleChange}
        required
      />
      <Input
        type="text"
        name="video"
        placeholder="URL of the Vídeo"
        value={formData.video}
        onChange={handleChange}
        required
      />
      <Textarea
        name="descricao"
        placeholder="Description"
        value={formData.descricao}
        onChange={handleChange}
        required
      />
      <Button type="submit">Save</Button>
      <Button type="button" onClick={handleReset}>
        Delete
      </Button>
    </FormContainer>
  );
};

export default NewVideo;
