import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import i18n from './i18n';
import rootStore from './rootStore';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <Provider store={rootStore}>
          <App />
        </Provider>
      </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode>,
);
