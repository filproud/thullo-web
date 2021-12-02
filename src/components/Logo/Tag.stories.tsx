import type { Meta } from '@storybook/react';

import { Logo } from '.';

export default {
  component: Logo,
  title: 'Logo',
} as Meta;

export const Default = () => <Logo username="example" />;

export const Disabled = () => <Logo username="example" />;
