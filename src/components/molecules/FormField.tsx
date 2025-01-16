import React from 'react';
import { Label, Input } from '../atoms';
import { FormFieldContainer } from '../../styles/molecules';
import { FormFieldProps } from '../../interfaces/molecules';

const FormField: React.FC<FormFieldProps> = ({ label, inputProps }) => (
  <FormFieldContainer>
    <Label>{label}</Label>
    <Input {...inputProps} />
  </FormFieldContainer>
);

export default FormField;
