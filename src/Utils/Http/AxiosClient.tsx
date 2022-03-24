import { setRequestSpinnerEnded, setRequestSpinnerStarted } from '@Redux/Reducers/LoadingReducer';
import { store } from '@Redux/store';
import { localService } from '@Services/LocalStorageService/LocalStorageService';
import { showError } from '@Utils/Alert/PopUp';
import axios from 'axios';
import queryString from 'query-string';

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL_MOVIE,
  timeout: 8000,
  headers: {
    'Content-Type': 'application/json',
    TokenCybersoft: process.env.REACT_APP_TOKEN_CYBERSOFT,
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(
  (config) => {
    if (config.headers) {
      const userInfo = localService.getUserInfo();
      const isLoading = config.headers.isLoading;
      isLoading && store.dispatch(setRequestSpinnerStarted());
      if (userInfo) config.headers.Authorization = `Bearer ${userInfo.accessToken}`;
    }

    return config;
  },
  (error) => {}
);

axiosClient.interceptors.response.use(
  async (response) => {
    if (response.config.headers) {
      const isLoading = response.config.headers.isLoading;
      isLoading && store.dispatch(setRequestSpinnerEnded());
    }

    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    const isLoading = error.config.headers?.isLoading;
    if (error.response) {
      isLoading && store.dispatch(setRequestSpinnerEnded());
      return error.response.data;
    }

    if (error.request) {
      isLoading && store.dispatch(setRequestSpinnerEnded());
      console.log('🚀 ~ file: AxiosClient.ts ~ line 34 ~ error.request', error.request);
    }

    if (error.message) {
      isLoading && store.dispatch(setRequestSpinnerEnded());
      showError(error.message);
      console.log('🚀 ~ file: AxiosClient.ts ~ line 39 ~ error.message', error.message);
      return;
    }
  }
);

export default axiosClient;
