import styled from "styled-components";
import { spacing } from "../variables";

interface StyledInputProps {
    inputSize?: 'small' | 'medium' | 'large';
}

export const StyledInput = styled('input').withConfig({
    shouldForwardProp: (prop) => !['inputSize'].includes(prop),
}) <StyledInputProps>`
    padding: ${(props) => spacing[props.inputSize || 'medium']};
    border-radius: 4px;
    border: 1px solid #ccc;
    font-size: 16px;
    width: 100%;
    box-sizing: border-box;
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 12px;
  margin-top: ${spacing.small};
`;