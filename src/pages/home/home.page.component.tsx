import React, { FunctionComponent } from 'react';
import './home.styles.scss';
import Showcase from '../../components/showcase/showcase.component';
import ArticlesGrid from '../../components/articles-grid/articles-grid.component';

const Home: FunctionComponent = () => {
  return (
    <div id="home-page" className="centering-container">
      <Showcase />
      <h1>Featured Articles</h1>
      <ArticlesGrid />
    </div>
  );
};

export default Home;
