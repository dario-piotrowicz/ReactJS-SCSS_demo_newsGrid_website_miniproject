import React, { FunctionComponent } from 'react';
import './join-our-club-aside.styles.scss';

const JoinOurClubAside: FunctionComponent = () => {
  return (
    <aside className="join-our-club">
      <h2>Join Our Club</h2>
      <p>
        Join our club to get fantactic perks and stuff. You will likely not
        regret it. Of those how have joined our club only 85% have regreted it,
        of those only 30% have cried to us and begged to cancel their
        subscription.
      </p>
      <button className="btn">Join Now</button>
    </aside>
  );
};

export default JoinOurClubAside;
