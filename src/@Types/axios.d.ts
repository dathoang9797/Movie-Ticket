import axios from 'axios';

type MyHeader = {
  headers?: {
    TokenCybersoft?: string;
    isLoading?: boolean;
    Authorization?: string;
  };
};
declare module 'axios' {
  export interface AxiosRequestConfig {
    headers?: AxiosRequestHeaders & MyHeader;
  }
  export interface AxiosStatic extends AxiosInstance {
    create(config?: AxiosRequestConfig & MyHeader): AxiosInstance;
  }

  export interface AxiosInstance {
    request<T = any>(config: AxiosRequestConfig & MyHeader): Promise<T>;
    get<T = any>(url: string, config?: AxiosRequestConfig & MyHeader): Promise<T>;
    delete<T = any>(url: string, config?: AxiosRequestConfig & MyHeader): Promise<T>;
    head<T = any>(url: string, config?: AxiosRequestConfig & MyHeader): Promise<T>;
    post<T = any>(url: string, data?: any, config?: AxiosRequestConfig & MyHeader): Promise<T>;
    put<T = any>(url: string, data?: any, config?: AxiosRequestConfig & MyHeader): Promise<T>;
    patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig & MyHeader): Promise<T>;
  }
}
