import type { ApolloError } from '@apollo/client';

// eslint-disable-next-line import/prefer-default-export
export class ApiError extends Error {
  public fields?: Record<string, string[]>;

  constructor(message = 'Something went wrong!', error: ApolloError) {
    super(message);

    if (error?.networkError) {
      return;
    }

    this.fields = error?.graphQLErrors?.[0]?.extensions;
  }
}
