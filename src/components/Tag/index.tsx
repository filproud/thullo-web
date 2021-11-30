import { Container, Text } from './styles';
import type { Props } from './types';

export function Tag({ title, backgroundColor, textColor, ...props }: Props) {
  return (
    <Container $backgroundColor={backgroundColor} {...props}>
      <Text $textColor={textColor}>{title}</Text>
    </Container>
  );
}
