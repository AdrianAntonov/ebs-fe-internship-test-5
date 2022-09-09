import $axios, { CancelToken } from 'axios';

export const axios = $axios.create();

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.baseURL = process.env.NEXT_PUBLIC_URL;

// It is like a middle-ware
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

// // Update accept language
// export const axiosHeadersUpdater = (lang: string) => {
//   axios.defaults.headers['Accept-Language'] = lang;
// };

// // Set default accept language
// axiosHeadersUpdater(Locale.RO);
