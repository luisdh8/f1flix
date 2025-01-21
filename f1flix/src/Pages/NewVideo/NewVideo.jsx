import React, { useState } from "react";
import { useVideoContext } from "../../Contexts/VideoContext";
import {
  FormContainer,
  Input,
  Textarea,
  Button,
  FormTitle,
  Select,
  Option,
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

  const categories = [
    "Highlights", "Race", "Interviews", "Incidents", "Grill the Grid", 
    "Funny", "Tech Talk", "Stories", "Drama", "Pure F1"
  ];

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
      <Select
        name="categoria"
        value={formData.categoria}
        onChange={handleChange}
        required
      >
        <Option value="">Select Category</Option>
        {categories.map((category) => (
          <Option key={category} value={category}>
            {category}
          </Option>
        ))}
      </Select>
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
      <Textarea
        name="descricao"
        placeholder="Description"
        value={formData.descricao}
        onChange={handleChange}
        required
      />
      <Button type="submit">Save Video</Button>
      <Button type="button" onClick={handleReset}>
        Reset
      </Button>
    </FormContainer>
  );
};

export default NewVideo;
