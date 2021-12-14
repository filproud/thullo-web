import type { Meta } from '@storybook/react';

import { Logo } from '.';

export default {
  component: Logo,
  title: 'Logo',
} as Meta;

export const Default = () => <Logo title="Thullo" />;

export const Disabled = () => <Logo title="Thullo" />;
