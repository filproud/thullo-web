import { Container, Title } from './styles';
import type { Props } from './types';

export function Logo({ url, title, ...props }: Props) {
  return (
    <Container>
      <img src={url} alt="logo" />
      <Title>{title}</Title>
    </Container>
  );
}
