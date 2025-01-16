import React from 'react';
import { StyledButton } from '../../styles/atoms';
import { ButtonProps } from '../../interfaces/atoms';

const Button: React.FC<ButtonProps> = ({ size = 'medium', onClick, children }) => (
  <StyledButton size={size} onClick={onClick}>{children}</StyledButton>
);

export default Button;
