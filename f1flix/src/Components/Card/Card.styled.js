import styled from "styled-components";

export const CardContainer = styled.div`
  position: relative;
  width: 18.75rem;
  background-color: #fff;
  border-radius: 0.5rem;
  border: 4px solid
    ${({ theme, category }) => theme.colors.categoryColors[category] || "#000"};
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: auto;
`;

export const CardActions = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  background: rgba(0, 0, 0, 0.7);
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 1.25rem;

  &:hover {
    color: #2166C1;
  }
`;

export const CardTitle = styled.h3`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0.5rem 1rem;
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  text-align: center;
  background-color: ${({ theme, category }) =>
    theme.colors.categoryColors[category] || "#000"};
  z-index: 1;
  border-bottom: 4px solid
    ${({ theme, category }) => theme.colors.categoryColors[category] || "#000"};
`;
