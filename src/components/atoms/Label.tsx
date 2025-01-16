import React from 'react';
import { StyledLabel } from '../../styles/atoms';
import { LabelProps } from '../../interfaces/atoms';

const Label: React.FC<LabelProps> = ({ children }) => (
  <StyledLabel>{children}</StyledLabel>
);

export default Label;
