import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { StyledLink } from '../../styles/atoms';
import { LinkProps } from '../../interfaces/atoms';

const Link: React.FC<LinkProps> = ({ to, children }) => (
  <StyledLink as={RouterLink} to={to}>
    {children}
  </StyledLink>
);

export default Link;
