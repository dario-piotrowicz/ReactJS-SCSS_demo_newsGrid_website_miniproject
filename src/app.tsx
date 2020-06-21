import React, { FunctionComponent } from 'react';
import './app.scss';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header/header.component';
import Home from './pages/home/home.page.component';
import Footer from './components/footer/footer.component';
import About from './pages/about/about.page.component';

const App: FunctionComponent = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
