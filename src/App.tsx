import React from 'react';
import RootRouter from './pages/router';
import { Provider } from 'react-redux';
import rootStore from './rootStore';
import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';

const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={rootStore}>
        <RootRouter />
      </Provider>
    </I18nextProvider>
  );
};

export default App;
