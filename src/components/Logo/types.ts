import type { ReactNode } from 'react';

export type Props = {
  username: string;
  children?: ReactNode;
  className?: string;
  open?: boolean;
};
