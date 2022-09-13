// Add SSR util to get dehydrate state of queries: utils/ssr.ts
import { dehydrate, QueryClient } from 'react-query';

export const getQueries = (queryClient: QueryClient): Record<string, any> =>
  dehydrate(queryClient).queries.reduce(
    (prevState, { state: { data }, queryHash }) => ({
      ...prevState,
      [JSON.parse(queryHash)[0]]: data, // Return data by query key
    }),
    {},
  );