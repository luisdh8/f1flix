import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const LinkNav = styled(NavLink)`
  &.active button {
    background: #111340;
    border: 0.125rem solid #E74C3C;
    box-shadow: 0px 0px 0.75rem 0.25rem #E74C3C inset;
    color: #E74C3C;
  }
`;

export const Logo = styled.img`
  height: 3.125rem;
  margin-right: 2rem;
`;

export const Nav = styled.nav`
  box-shadow: 0px 0px 0.75rem 0.25rem #E74C3C;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 4rem;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const NavContainer = styled.div`
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
