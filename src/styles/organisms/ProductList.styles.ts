import styled from 'styled-components';
import { spacing } from '../variables';

export const ProductListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: ${spacing.large};

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
