import { axios } from 'libs/axios';

const companies = {
  search: ({ queryKey: [, query] }: Record<string, any>) => {
    return axios.get(`/company?slug=${query.id}`).then(({ data }) => data);
  },
};
export default companies;
