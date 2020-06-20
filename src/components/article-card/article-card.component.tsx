import React, { FunctionComponent } from 'react';
import './article-card.styles.scss';
import CategoryTag from '../category-tag/category-tag.component';
import { Article } from '../../common/types';

type ArticleCardProps = Article;

const ArticleCard: FunctionComponent<ArticleCardProps> = (article) => {
  return (
    <article className="article-card">
      {article.imgSrc ? <img src={article.imgSrc} /> : null}
      <div>
        <CategoryTag type={article.category} />
        <h3>
          <a href="#">{article.title}</a>
        </h3>
        <p>{article.description}</p>
      </div>
    </article>
  );
};

export default ArticleCard;
