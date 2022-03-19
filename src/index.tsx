import '@Config/Lang';
import { connection } from '@Config/WebSocket';
import { HttpError } from '@microsoft/signalr';
import { store } from '@Redux/store';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';

// CSS
import 'react-circular-progressbar/dist/styles.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'antd/dist/antd.css';
import './index.css';

connection
  .start()
  .then(() => {
    ReactDOM.render(
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>,
      document.getElementById('root')
    );
  })
  .catch((err) => {
    const error = err as HttpError;
    console.log(error.message);
  });
