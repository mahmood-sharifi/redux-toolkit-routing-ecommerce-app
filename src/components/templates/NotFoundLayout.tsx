import React from 'react';
import { MainLayout } from '../../styles/templates';
import { NotFoundLayoutProps } from '../../interfaces/templates';

const NotFoundLayout: React.FC<NotFoundLayoutProps> = ({ children }) => (
  <MainLayout>
    <h1>Page Not Found</h1>
    {children}
  </MainLayout>
);

export default NotFoundLayout;
