import React, { FunctionComponent } from 'react';
import './showcase.styles.scss';
import CategoryTag from '../category-tag/category-tag.component';
import { CategoryType } from '../../common/enums';
import { Link } from 'react-router-dom';

const Showcase: FunctionComponent = () => {
  return (
    <section className="showcase">
      <div className="centering-container">
        <div className="content">
          <CategoryTag type={CategoryType.Sports} />
          <h1>White ESU agains Black 55</h1>
          <p>
            It is again that time of the year, the great ESU with their white
            uniforms are about to dooke it out with the fearsome team 55 which
            is porting a black-ish uniform. Join us as we're going to discuss
            what to expect from these fantastic teams.
          </p>
          <Link to="article/article_showcase" className="btn-primary">
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
