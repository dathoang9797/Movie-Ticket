import { RouteProps, RouteComponentProps } from 'react-router-dom';

// Router
export type PropsParams = {
  maPhim?: string;
  id?: string;
  maLichChieu?: string;
};

//Template
export type PropsTemplate = {
  Component: React.ComponentType<RouteComponentProps<PropsParams>>;
} & RouteProps;

export type PropsRouterComponent = RouteComponentProps<PropsParams>;

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
