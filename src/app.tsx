import React, { FunctionComponent } from 'react';
import './app.scss';
import Header from './components/header/header.component';
import Home from './pages/home/home.page.component';
import Footer from './components/footer/footer.component';

const App: FunctionComponent = () => {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
};

export default App;
