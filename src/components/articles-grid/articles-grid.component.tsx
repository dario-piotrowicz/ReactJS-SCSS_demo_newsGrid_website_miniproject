import React, { FunctionComponent } from 'react';
import './articles-grid.styles.scss';
import ArticleCard from '../article-card/article-card.component';
import { articles } from './articles';

const ArticlesGrid: FunctionComponent = () => {
  return (
    <div className="articles-grid">
      {articles.map((a) => (
        <ArticleCard key={a.id} {...a} />
      ))}
    </div>
  );
};

export default ArticlesGrid;
