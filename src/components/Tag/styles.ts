import styled, { css } from 'styled-components';

import type { StyledContainerProps, StyledTextProps } from './types';

export const Container = styled.div<StyledContainerProps>`
  height: fit-content;
  padding: 0.125rem 0.625rem;
  border-radius: 0.5rem;
  background-color: #ebdcf9;
  width: fit-content;
  display: flex;
  align-items: center;

  ${({ $backgroundColor }) =>
    $backgroundColor &&
    css`
      background-color: ${$backgroundColor};
    `}
`;

export const Text = styled.span<StyledTextProps>`
  font-weight: 500;
  font-size: 0.625rem;
  line-height: 0.875rem;
  letter-spacing: -0.035em;
  color: #9b51e0;

  ${({ $textColor }) =>
    $textColor &&
    css`
      color: ${$textColor};
    `}
`;
