import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../store/slices/userSlice';
import { RegisterForm } from '../organisms';
import { RegisterFormData } from '../../interfaces/organisms';
import { SubmitHandler } from 'react-hook-form';

const Register: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister: SubmitHandler<RegisterFormData> = (data) => {
    dispatch(registerUser({ ...data, isAdmin: false, id: Date.now() }));
    navigate('/dashboard/user/profile');
  };

  return (
    <div>
      <h1>Register</h1>
      <RegisterForm onSubmit={handleRegister} />
    </div>
  );
};

export default Register;
