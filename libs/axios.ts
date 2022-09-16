import $axios from 'axios';

export const axios = $axios.create();

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.baseURL = process.env.NEXT_PUBLIC_URL;

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if ($axios.isCancel(error)) {
      return Promise.reject({
        cancel: true,
        message: 'The endpoint was cancelled',
      });
    }

    return Promise.reject(error);
  }
);
