import React, { FunctionComponent } from 'react';
import './article-card.styles.scss';
import CategoryTag from '../category-tag/category-tag.component';
import { ArticleCardData } from '../../common/types';
import { ArticleCardBackground } from '../../common/enums';
import { Link } from 'react-router-dom';

function getCardClassName(
  horizontalDisplay: boolean,
  reverseOrder: boolean,
  background: ArticleCardBackground
) {
  let className = 'article-card';
  if (horizontalDisplay) className += ' horizontal';
  if (reverseOrder) className += ' reverse';
  if (background === ArticleCardBackground.Dark) className += ' bg-dark';
  if (background === ArticleCardBackground.Primary) className += ' bg-primary';
  return className;
}

type ArticleCardProps = ArticleCardData;

const ArticleCard: FunctionComponent<ArticleCardProps> = ({
  article,
  horizontalDisplay,
  reverseOrder,
  background,
}) => {
  const className = getCardClassName(
    horizontalDisplay,
    reverseOrder,
    background
  );
  return (
    <article className={className}>
      {article.imgSrc ? <img src={article.imgSrc} /> : null}
      <div>
        <CategoryTag type={article.category} />
        <h3>
          <Link to={`article/${article.id}`}>{article.title}</Link>
        </h3>
        <p>{article.description}</p>
      </div>
    </article>
  );
};

export default ArticleCard;
