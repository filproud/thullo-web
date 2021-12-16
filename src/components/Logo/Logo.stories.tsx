import type { Meta } from '@storybook/react';

import { Logo } from '.';
import iconLogo from '../../assets/icons/Logo-small.svg';

export default {
  component: Logo,
  title: 'Logo',
} as Meta;

export const Default = () => <Logo title="Thullo" url={iconLogo} />;
