import { RouteProps, RouteComponentProps } from 'react-router-dom';

//Template
export type PropsTemplate = {
  Component: React.ComponentType<RouteComponentProps>;
} & RouteProps;

export type ResponseData<T> = {
  statusCode: number;
  message: string;
  content: T;
  dateTime: string;
  messageConstants: string | null;
};

export type ResponseErrorDanhSachPhim = {
  content: string;
  contentType: string;
  statusCode: number;
};
