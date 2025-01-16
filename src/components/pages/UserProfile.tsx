import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const UserProfile: React.FC = () => {
  const user = useSelector((state: RootState) => state.user.user);

  if (!user) {
    return <p>User not found</p>;
  }

  return (
    <div>
      <h1>User Profile</h1>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserProfile;
