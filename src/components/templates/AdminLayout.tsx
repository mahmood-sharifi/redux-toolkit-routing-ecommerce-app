import React from 'react';
import { MainLayout } from '../../styles/templates';
import { AdminLayoutProps } from '../../interfaces/templates';

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => (
  <MainLayout>
    <h1>Admin Dashboard</h1>
    {children}
  </MainLayout>
);

export default AdminLayout;
