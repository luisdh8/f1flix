import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  overflow: auto; /* Permite que el contenido de la página sea desplazable */
`;

export const ModalContent = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  width: 400px;
  max-height: 80%; /* Limita el tamaño del modal */
  overflow-y: auto; /* Permite que el contenido del modal sea desplazable */
  position: relative;
  z-index: 2000;
`;

export const ModalTitle = styled.h2`
  color: ${({ theme }) => theme.colors.color};
  text-align: center;
`;

export const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.color};
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Button = styled.button`
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.primaryHover};
  color: #fff;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.color};
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryHover};
  }
`;
