import React, { FunctionComponent } from 'react';
import './article.styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import CategoryTag from '../../components/category-tag/category-tag.component';
import { CategoryType } from '../../common/enums';
import JoinOurClubAside from '../../components/join-our-club-aside/join-our-club-aside.component';
import { useParams } from 'react-router-dom';
import { articles } from '../../common/articles';

const Article: FunctionComponent = () => {
  const { articleId } = useParams();
  const article = articles.find((a) => a.id === articleId);

  if (!article) {
    return (
      <div id="article-not-found-page">
        <h1>404 Article not found!</h1>
      </div>
    );
  }

  return (
    <div id="article-page" className="centering-container">
      <article>
        {article.imgSrc ? <img src={article.imgSrc} /> : null}
        <h1>{article.title}</h1>
        <div className="meta">
          <small>
            <FontAwesomeIcon icon={faUser} /> Written By Doe John | January 12,
            2020
          </small>
          <CategoryTag type={CategoryType.Entertainment} />
        </div>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </article>
      <aside className="categories">
        <h2>Categories</h2>
        <ul>
          <li>
            <FontAwesomeIcon icon={faChevronRight} />
            <span>Sports</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faChevronRight} />
            <span>Technology</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faChevronRight} />
            <span>Entertainment</span>
          </li>
        </ul>
      </aside>
      <JoinOurClubAside />
    </div>
  );
};

export default Article;
