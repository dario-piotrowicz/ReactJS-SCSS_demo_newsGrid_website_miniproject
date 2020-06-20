import React, { FunctionComponent } from 'react';
import './home.styles.scss';
import Showcase from '../../components/showcase/showcase.component';

const Home: FunctionComponent = () => {
  return (
    <div id="home-page">
      <Showcase />
    </div>
  );
};

export default Home;
