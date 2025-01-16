import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../store/slices/userSlice';

const Logout: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  React.useEffect(() => {
    dispatch(logoutUser());
    navigate('/');
  }, [dispatch, navigate]);

  return null;
};

export default Logout;
