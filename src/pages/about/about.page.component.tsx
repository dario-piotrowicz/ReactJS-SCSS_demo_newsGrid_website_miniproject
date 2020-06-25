import React, { FunctionComponent } from 'react';
import './about.styles.scss';
import JoinOurClubAside from '../../components/join-our-club-aside/join-our-club-aside.component';

const About: FunctionComponent = () => {
  return (
    <div id="about-page" className="centering-container">
      <article>
        <h1>About Our Organization</h1>
        <p>
          Our <strong>totally</strong> real company brings to you the latest
          news from all around the world, viewable from any device and browser!
        </p>
        <p>
          Our news cover a <strong>huge</strong> variety of categories, ranging
          from sports to technology, entertainment and much much much much more!
          (it's not like we only have those three categories!)
        </p>
        <p>
          Our (again, <strong>totally</strong> existing) company is set up to
          provide to you the best news service possible.
          <br />
          Furthermore if you join our club (see panel on the right) you can even
          get more newsy news and much more!
        </p>
        <p>
          Let's also hear a few words from out esteemed president, Mr.
          NewsGridPrez:
          <br />
          <em>
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            nobis possimus nemo nesciunt, facilis at sequi delectus distinctio
            sint in atque obcaecati illo dolorem ullam voluptates, nostrum
            asperiores aperiam blanditiis, perspiciatis sed molestias nulla.
            Quia accusamus aliquid id culpa esse asperiores magni omnis sed
            neque! Beatae velit expedita autem obcaecati."
            <br />
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
            vitae beatae in culpa sed rerum id iure mollitia molestiae alias
            temporibus est ut, labore consequatur ducimus dignissimos quae esse
            eos velit, debitis quaerat recusandae itaque. Iure nihil beatae
            recusandae molestias, officia perspiciatis vitae cumque vel,
            deleniti dolorem minima consectetur quidem autem doloribus officiis,
            aliquam veritatis enim quos ullam. Molestiae ipsum quos eligendi
            aperiam unde nisi facere vitae, quaerat quasi commodi ab
            consequatur, delectus cupiditate modi quam! Accusamus voluptas,
            temporibus molestiae iste unde sed quis esse, eius in placeat eum
            pariatur iure quaerat molestias neque a laborum. Hic ut minima
            accusantium?
          </em>
        </p>
      </article>
      <JoinOurClubAside />
    </div>
  );
};

export default About;
