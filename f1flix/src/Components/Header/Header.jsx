import React, { useState } from "react";
import Button from "../Button/Button";
import { LinkNav, Logo, Nav, NavContainer } from "./Header.styled";
import logo from "../../assets/logo.png";
import NewVideoModal from "../NewVideoModal/NewVideoModal";

const Header = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <header>
      <Nav>
        <Logo src={logo} alt="AluraFlix Logo" />
        <NavContainer>
          <LinkNav
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <Button>Home</Button>
          </LinkNav>
          <Button onClick={handleOpenModal}>New Video</Button>
        </NavContainer>
      </Nav>
      <NewVideoModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </header>
  );
};

export default Header;
