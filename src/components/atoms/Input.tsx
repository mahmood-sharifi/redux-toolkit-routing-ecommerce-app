import React from 'react';
import { StyledInput, ErrorText } from '../../styles/atoms';
import { InputProps } from '../../interfaces/atoms';

const Input: React.FC<InputProps> = ({ inputSize = 'medium', error, ...props }) => (
  <div>
    <StyledInput inputSize={inputSize} {...props} />
    {error && <ErrorText>{error}</ErrorText>}
  </div>
);

export default Input;
