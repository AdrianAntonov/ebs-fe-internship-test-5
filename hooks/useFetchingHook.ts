import { useQuery } from 'react-query';
import { axios } from '../libs/axios';
// import axios from 'axios';

// const fetchData = (arg) =>
//   axios.get(`/search?page=1&per_page=5&company_name=${arg}`);

export function useFetchingHook(arg) {
  return useQuery(['company-name', arg], () =>
    axios.get(`/search?page=1&per_page=5&company_name=${arg}`)
  );
}

export default useFetchingHook;
