import styled from 'styled-components';
import { from } from 'styles/media';

export const MaxContent = styled.div`
  width: 100%;
  max-width: 75rem; // 1200px
  margin: 0 auto;
  padding-left: 1rem;
  padding-right: 1rem;

  ${from.tablet} {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  ${from.desktop} {
    padding-left: 0;
    padding-right: 0;
  }
`;
