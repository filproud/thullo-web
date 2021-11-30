import { Container, Text } from './styles';
import type { Props } from './types';

export function Tag({ ...props }: Props) {
  return (
    <Container {...props}>
      <Text>Valor text</Text>
    </Container>
  );
}
