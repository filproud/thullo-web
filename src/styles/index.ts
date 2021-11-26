import 'styled-components';
import type { Theme } from './themes';

declare module 'styled-components' {
  // noinspection JSUnusedGlobalSymbols
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
