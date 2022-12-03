import { useQuery } from '@tanstack/react-query';
import { axios } from '../libs/axios';

export function useFetchingHook(arg) {
  return useQuery(['company-name', arg], () =>
    axios.get(`/search?page=1&per_page=5&company_name=${arg}`)
  );
}

export default useFetchingHook;
