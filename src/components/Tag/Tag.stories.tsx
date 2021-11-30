import type { Meta } from '@storybook/react';

import { Tag } from '.';

export default {
  component: Tag,
  title: 'Tag',
} as Meta;

export const Default = () => <Tag title="Concept" />;

export const WithCustomColor = () => (
  <Tag title="Concept" textColor="#219653" backgroundColor="#D3EADD" />
);
