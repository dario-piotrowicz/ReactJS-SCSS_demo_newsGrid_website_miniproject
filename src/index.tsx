import React, { FunctionComponent } from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { HashRouter as Router } from 'react-router-dom';

const NewsGrid: FunctionComponent = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

ReactDOM.render(<NewsGrid />, document.getElementById('root'));
