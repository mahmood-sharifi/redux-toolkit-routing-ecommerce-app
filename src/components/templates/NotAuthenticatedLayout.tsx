import React from 'react';
import { MainLayout } from '../../styles/templates';
import { NotAuthenticatedLayoutProps } from '../../interfaces/templates';

const NotAuthenticatedLayout: React.FC<NotAuthenticatedLayoutProps> = ({ children }) => (
  <MainLayout>
    <h1>Please log in</h1>
    {children}
  </MainLayout>
);

export default NotAuthenticatedLayout;
