import { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { CardActions, CardContainer, CardImage, IconButton } from "./Card.styled";
import { useVideoContext } from "../../Contexts/VideoContext";
import EditModal from "../EditModal/EditModal";

const Card = ({ video }) => {
  const { deleteVideo } = useVideoContext();
  const [isModalOpen, setModalOpen] = useState(false);

  const handleEditClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <CardContainer category={video.categoria}>
        <CardImage src={video.img} alt={video.titulo} />
        <CardActions>
          <IconButton onClick={() => deleteVideo(video.id)}>
            <FaTrashAlt />
          </IconButton>

          <IconButton onClick={handleEditClick}>
            <FaEdit />
          </IconButton>
        </CardActions>
      </CardContainer>
      <EditModal video={video} isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default Card;
