import styled from 'styled-components';

export const StyledLink = styled('a')`
  color: ${(props) => props.theme.primaryColor};
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.primaryHoverColor};
  }
`;
