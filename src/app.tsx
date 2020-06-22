import React, { FunctionComponent, useEffect } from 'react';
import './app.scss';
import { Switch, Route, useHistory } from 'react-router-dom';
import Header from './components/header/header.component';
import Home from './pages/home/home.page.component';
import Footer from './components/footer/footer.component';
import About from './pages/about/about.page.component';
import Article from './pages/article/article.page.component';

const App: FunctionComponent = () => {
  const history = useHistory();

  useEffect(() => {
    return history.listen(() => {
      console.log('test from app');
      window.scrollTo(0, 0);
    });
  }, [history]);

  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/article/:articleId" exact>
          <Article />
        </Route>
      </Switch>
      <Footer />
    </>
  );
};

export default App;
