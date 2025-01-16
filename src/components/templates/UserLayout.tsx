import React from 'react';
import { MainLayout } from '../../styles/templates';
import { UserLayoutProps } from '../../interfaces/templates';

const UserLayout: React.FC<UserLayoutProps> = ({ children }) => (
  <MainLayout>
    <h1>User Dashboard</h1>
    {children}
  </MainLayout>
);

export default UserLayout;
