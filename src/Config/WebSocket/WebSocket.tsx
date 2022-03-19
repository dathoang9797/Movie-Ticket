import * as signalR from '@microsoft/signalr';

export const connection = new signalR.HubConnectionBuilder()
  .withUrl(`${process.env.REACT_APP_URL_WEB_SOCKET}`)
  .configureLogging(signalR.LogLevel.Information)
  .build();
