import React, { FunctionComponent } from 'react';
import './showcase.styles.scss';
import CategoryTag from '../category-tag/category-tag.component';
import { CategoryType } from '../../common/enums';
import { Link } from 'react-router-dom';
import { articles } from '../../common/articles';

const Showcase: FunctionComponent = () => {
  const article = articles[0];

  const backgroundStyle = {
    background: `url('${article.imgSrc}') no-repeat center center/cover`,
  };

  return (
    <section className="showcase">
      <div className="background" style={backgroundStyle} />
      <div className="centering-container">
        <div className="content">
          <CategoryTag type={CategoryType.Sports} />
          <h1>{article.title}</h1>
          <p>{article.description}</p>
          <Link to={`article/${article.id}`} className="btn-primary">
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
