import { dehydrate, QueryClient } from 'react-query';

export const getQueries = (queryClient: QueryClient): Record<string, any> =>
  dehydrate(queryClient).queries.reduce(
    (prevState, { state: { data }, queryHash }) => ({
      ...prevState,
      [JSON.parse(queryHash)[0]]: data, // Return data by query key
    }),
    {},
  );