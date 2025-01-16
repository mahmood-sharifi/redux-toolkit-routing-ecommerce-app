import styled from 'styled-components';
import { spacing } from '../variables';

export const Card = styled.div`
  border: 1px solid #ddd;
  padding: ${spacing.large};
  border-radius: 8px;
  margin: ${spacing.medium};
  text-align: center;
  width: calc(33% - ${spacing.medium});

  @media (max-width: 768px) {
    width: calc(50% - ${spacing.medium});
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;
