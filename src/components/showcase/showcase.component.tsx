import React, { FunctionComponent } from 'react';
import './showcase.styles.scss';
import CategoryTag from '../category-tag/category-tag.component';
import { CategoryType } from '../../common/enums';

const Showcase: FunctionComponent = () => {
  return (
    <section className="showcase">
      <div className="centering-container">
        <div className="content">
          <CategoryTag type={CategoryType.Sports} />
          <h1>Some Sports Article</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatibus labore nihil doloribus enim dolores commodi corporis,
            earum architecto delectus consequatur pariatur eveniet. Ullam eaque
            libero ab nihil dolore quas dignissimos.
          </p>
          <a href="#" className="btn-primary">
            Read More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
