import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { ScrollToTop } from 'components/ScrollToTop';
import { GlobalStyle } from 'styles/GlobalStyle';
import { base } from 'styles/themes';
import { Root } from 'containers/Root';
import { client } from 'apollo/client';

export const App = () => {
  return (
    <ThemeProvider theme={base}>
      <GlobalStyle />
      <ApolloProvider client={client}>
        <BrowserRouter>
          <ScrollToTop />
          <Root />
        </BrowserRouter>
      </ApolloProvider>
    </ThemeProvider>
  );
};
