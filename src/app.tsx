import React, { FunctionComponent } from 'react';
import './app.scss';
import Header from './components/header/header.component';
import Home from './pages/home/home.page.component';

const App: FunctionComponent = () => {
  return (
    <>
      <Header />
      <Home />
    </>
  );
};

export default App;
