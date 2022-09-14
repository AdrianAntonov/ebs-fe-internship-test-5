import { axios } from 'libs/axios';

const companies = {
  search: ({ queryKey: [, query] }: Record<string, any>) =>
    axios.get(`/company?slug=${query.slug}`).then(({ data }) => data),
};
console.log(companies);
export default companies;
