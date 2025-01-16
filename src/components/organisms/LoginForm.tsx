import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginFormData, loginSchema } from '../../interfaces/organisms';
import { FormField } from '../molecules';
import { Button } from '../atoms';

const LoginForm: React.FC<{ onSubmit: SubmitHandler<LoginFormData> }> = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormField label="Email" inputProps={{ ...register('email'), type: 'email', error: errors.email?.message }} />
      <FormField label="Password" inputProps={{ ...register('password'), type: 'password', error: errors.password?.message }} />
      <Button type="submit">Login</Button>
    </form>
  );
};

export default LoginForm;
