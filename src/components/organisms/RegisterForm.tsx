import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterFormData, registerSchema } from '../../interfaces/organisms';
import { FormField } from '../molecules';
import { Button } from '../atoms';

const RegisterForm: React.FC<{ onSubmit: SubmitHandler<RegisterFormData> }> = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormField label="Email" inputProps={{ ...register('email'), type: 'email', error: errors.email?.message }} />
      <FormField label="Password" inputProps={{ ...register('password'), type: 'password', error: errors.password?.message }} />
      <FormField label="Confirm Password" inputProps={{ ...register('confirmPassword'), type: 'password', error: errors.confirmPassword?.message }} />
      <Button type="submit">Register</Button>
    </form>
  );
};

export default RegisterForm;
