import styled from 'styled-components';
import { sizes } from '../variables';

interface StyledButtonProps {
  size?: 'small' | 'medium' | 'large';
}

export const StyledButton = styled('button').withConfig({
  shouldForwardProp: (prop) => !['size'].includes(prop),
})<StyledButtonProps>`
  background-color: ${(props) => props.theme.primaryColor};
  color: white;
  border: none;
  padding: ${(props) => sizes[props.size || 'medium']};
  cursor: pointer;
  border-radius: 4px;
  font-size: 16px;
  &:hover {
    background-color: ${(props) => props.theme.primaryHoverColor};
  }
`;
