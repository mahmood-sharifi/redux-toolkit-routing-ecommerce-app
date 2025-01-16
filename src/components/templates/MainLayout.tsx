import React from 'react';
import { MainLayout as StyledMainLayout } from '../../styles/templates';
import { MainLayoutProps } from '../../interfaces/templates';

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => (
  <StyledMainLayout>
    {children}
  </StyledMainLayout>
);

export default MainLayout;
