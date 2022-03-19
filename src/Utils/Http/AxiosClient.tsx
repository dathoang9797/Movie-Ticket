import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import queryString from 'query-string';
import { localService } from '@Services/LocalStorageService/LocalStorageService';
import { store } from '@Redux/store';
import {
  setRequestSpinnerEnded,
  setRequestSpinnerStarted,
} from '@Redux/Reducers/LoadingReducer/LoadingAction';
import { MyHeader } from 'src/@Types/axios';

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL_MOVIE,
  timeout: 8000,
  headers: {
    'Content-Type': 'application/json',
    TokenCybersoft: process.env.REACT_APP_TOKEN_CYBERSOFT,
    isLoading: true,
  },

  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(
  (config: MyHeader) => {
    // Do something before request is sent
    if (config.headers) {
      const isLoading = config.headers.isLoading;
      isLoading && store.dispatch(setRequestSpinnerStarted());
    }

    if (config.headers) {
      const userInfo = localService.getUserInfo();
      if (userInfo) config.headers.Authorization = `Bearer ${userInfo.accessToken}`;
    }

    return config;
  },
  (error) => {
    // Do something with request error
  }
);

axiosClient.interceptors.response.use(
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  async (response) => {
    if (response.config.headers) {
      const isLoading = response.config.headers.isLoading as boolean;
      isLoading && store.dispatch(setRequestSpinnerEnded());
    }

    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error: AxiosError) => {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      return error.response.data;
    }
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    if (error.request) {
      console.log('🚀 ~ file: AxiosClient.ts ~ line 34 ~ error.request', error.request);
    }
    // // Something happened in setting up the request that triggered an Error
    if (error.message) {
      console.log('🚀 ~ file: AxiosClient.ts ~ line 39 ~ error.message', error.message);
      return;
    }
  }
);

export default axiosClient;
