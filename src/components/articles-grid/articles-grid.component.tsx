import React, { FunctionComponent } from 'react';
import './articles-grid.styles.scss';
import ArticleCard from '../article-card/article-card.component';
import { articleCardsData } from './articles';

const ArticlesGrid: FunctionComponent = () => {
  return (
    <div className="articles-grid">
      {articleCardsData.map((a) => (
        <ArticleCard key={a.article.id} {...a} />
      ))}
    </div>
  );
};

export default ArticlesGrid;
