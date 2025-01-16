import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../store/slices/userSlice';
import { LoginForm } from '../organisms';
import { LoginFormData } from '../../interfaces/organisms';
import { SubmitHandler } from 'react-hook-form';

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin: SubmitHandler<LoginFormData> = (data) => {
    dispatch(loginUser({ ...data, isAdmin: false, id: Date.now() }));
    navigate('/dashboard/user/profile');
  };

  return (
    <div>
      <h1>Login</h1>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default Login;
