import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { appConfig } from 'config';
import { getToken, removeToken } from 'services/token';

const authLink = new ApolloLink((operation, forward) => {
  const token = getToken();

  if (token) {
    operation.setContext(({ headers = {} }) => ({
      headers: {
        ...headers,
        Accept: 'application/json',
        Authorization: `JWT ${token}`,
      },
    }));
  }

  return forward(operation);
});

export const cache = new InMemoryCache();

const httpLink = new HttpLink({ uri: `${appConfig.apiUrl}/graphql` });

const logoutLink = onError(({ networkError }) => {
  const error =
    networkError &&
    'statusCode' in networkError &&
    networkError.statusCode === 401;

  if (error) removeToken();
});

export const client = new ApolloClient({
  cache,
  link: ApolloLink.from([logoutLink, authLink, httpLink]),
});
