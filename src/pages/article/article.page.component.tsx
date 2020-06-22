import React, { FunctionComponent } from 'react';
import './article.styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import CategoryTag from '../../components/category-tag/category-tag.component';
import { CategoryType } from '../../common/enums';
import JoinOurClubAside from '../../components/join-our-club-aside/join-our-club-aside.component';

const Article: FunctionComponent = () => {
  return (
    <div id="article-page" className="centering-container">
      <article>
        <img src="./images/articles/ent1.jpg" />
        <h1>Article</h1>
        <div className="meta">
          <small>
            <FontAwesomeIcon icon={faUser} /> Written By Doe John | January 12,
            2020
          </small>
          <CategoryTag type={CategoryType.Entertainment} />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate et
          rem excepturi rerum soluta eius consectetur cupiditate nostrum eum,
          enim itaque, minima nisi aliquam quidem perspiciatis. Recusandae
          consequatur vero ratione quas molestiae, saepe, aliquam, incidunt
          laudantium dignissimos quis delectus similique fugit repellat iusto
          facilis eaque a repellendus earum. Sunt, deleniti.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
          voluptates obcaecati. Molestiae pariatur enim veritatis eligendi
          ratione dolorem quasi. Optio nisi officiis perferendis accusamus
          repellat quibusdam animi enim et vero deleniti ipsam molestias porro
          illo modi rem odio fugit excepturi, laudantium aperiam minima facere.
          Eveniet, placeat ratione molestias, vitae blanditiis sapiente optio
          pariatur magnam libero cumque porro. Quisquam culpa recusandae
          temporibus in, obcaecati corporis maxime incidunt blanditiis nemo
          quaerat consequuntur eligendi quis, iusto ipsam! Quasi, magni
          aspernatur? Necessitatibus molestias in illo quo blanditiis cumque?
          Mollitia dolorem tenetur optio inventore rerum blanditiis
          necessitatibus ipsa, reprehenderit aut exercitationem repellat non
          aliquam a, veniam nihil sapiente officia itaque! Consectetur assumenda
          vero voluptatibus magnam, ipsa tempora quisquam aliquam a laboriosam
          culpa officiis voluptates unde nisi blanditiis quo deserunt esse
          dolorem earum at beatae quaerat quasi nemo quam veritatis. Neque,
          inventore odio rem modi quas ipsam labore incidunt natus sed eius
          aperiam reiciendis recusandae harum?
        </p>
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
