import { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import {
  CardActions,
  CardContainer,
  CardImage,
  IconButton,
  CardTitle,
} from "./Card.styled";
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
      <a
        href={video.video}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <CardContainer category={video.categoria}>
          <CardTitle category={video.categoria}>{video.titulo}</CardTitle>
          <CardImage src={video.img} alt={video.titulo} />
          <CardActions>
            <IconButton
              onClick={(e) => {
                e.preventDefault(); // Evitamos que el enlace se active
                deleteVideo(video.id);
              }}
            >
              <FaTrashAlt />
            </IconButton>

            <IconButton
              onClick={(e) => {
                e.preventDefault(); // Evitamos que el enlace se active
                handleEditClick();
              }}
            >
              <FaEdit />
            </IconButton>
          </CardActions>
        </CardContainer>
      </a>
      <EditModal video={video} isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default Card;
