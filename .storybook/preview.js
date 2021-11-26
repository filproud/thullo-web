import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../src/styles/GlobalStyle';
import { base } from '../src/styles/themes';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={base}>
      <GlobalStyle />
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
