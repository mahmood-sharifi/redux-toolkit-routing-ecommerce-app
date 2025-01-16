import styled from 'styled-components';
import { spacing } from '../variables';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${spacing.large};
  background-color: ${(props) => props.theme.primaryColor};
  color: white;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  flex-direction: column;
  gap: ${spacing.small};

  div {
    width: 25px;
    height: 3px;
    background-color: white;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

interface NavLinksProps {
  isOpen: boolean;
}

export const NavLinks = styled.div<NavLinksProps>`
  display: flex;
  gap: ${spacing.medium};

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  }
`;

export const NavLink = styled.div`
  margin: ${spacing.small} 0;

  @media (min-width: 769px) {
    margin: 0;
  }
`;
