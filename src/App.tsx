import React from 'react';
import GlobalContainer from './components/common/GlobalContainer';
import RootRouter from './pages/router';

const App = () => {
  return (
    <GlobalContainer>
      <RootRouter />
    </GlobalContainer>
  );
};

export default App;
