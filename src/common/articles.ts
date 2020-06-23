import { CategoryType, ArticleCardBackground } from './enums';
import { ArticleData, ArticleCardData } from './types';

export const articles: ArticleData[] = [
  {
    id: 'article_0',
    category: CategoryType.Sports,
    imgSrc: './images/articles/sports1.jpg',
    title: 'White ESU agains Black 55',
    description: `
    It is again that time of the year, the great ESU with their white
    uniforms are about to duke it out with the fearsome team 55 which
    is porting a black-ish uniform. Join us as we're going to discuss
    what to expect from these fantastic teams.
  `,
    content: `
      <p>
      Get ready for the increadible match!
      </p>
      <br />
      <p>
      <span style="color: red;">Blood</span> is going to be spilled when those
      strong teams meet in the <span style="color: green;">field</span>!
      </p>
      <br />
      <p>
      As we all know last year <strong>ESU</strong> won the fateful match by scoring a wonderful...
      whatever you score in american football... yard.... touchdown? yeah! something like that!
      </p>
      <br />
      <p>
      But will they be able to do the same this year?
      <br/>
      As we all know <strong>Team 55</strong> got a new manager... coach.... whater you call that
      in american football! <em>That one!</em>
      </p>
      <br />
      <p>
      And the new whatever is doing very well and has won many games!
      </p>
      <br />
      <p>
      It really is going to be a very excting match! Do not miss it, and do not miss out live coverage!
      </p>
    `,
  },
  {
    id: 'article_1',
    category: CategoryType.Entertainment,
    imgSrc: './images/articles/ent1.jpg',
    title: 'VR in the woods',
    description: `
    Studies suggest that is not silly at all going
    into a forest to play VR games.
    For some reason it could be quite entertaining
    and the fresh air and available space would make
    it mush healthier.
  `,
    content: `
      <p>Studies suggest that is not silly at all going
      into a forest to play VR games.
      For some reason it could be quite entertaining
      and the fresh air and available space would make
      it mush healthier.</p>
      <br />
      <p>
      If you also sport a nice beard that is a plus, a multicolored
      scarf is definitely beneificial but not mandatory, and do not
      forget to wear gloves, they do something, for some reason.
      </p>
      <br />
      <p>
      So we suggest you to embark in a grand advenute with your pals
      and a nice VR headset and go to a forest to enjoy a whole new
      virtual reality experience! It is going to be healthy and fun!
      </p>
      <br />
      <p>
      Before we wrap things up I just wanted to mention one last thing,
      <strong>do not wear a swim cap</strong> wild immersed in the VR world,
      I know that may be tempting but it's a practice for only highly skilled
      individuals with many years of experice! <em>Safety First!</em>
      </p>`,
  },
  {
    id: 'article_2',
    category: CategoryType.Sports,
    title: 'Incredible Goal',
    description: `
    That great player scored an incredible goal!
    He dibbled his opponents and scored a fantastic
    goal, allowing his team to win the game!
    We interviewed him and he shared his magnificent
    moment with us.
  `,
    content: `
      <p>
      <em>"I did score that goal! And it was so cool, wasn't it?"</em>
      <br />
      those are the first words that that great player spoke to us, he's such a great player!
      </p>
      <br />
      <p>
      He continued with:
      <br />
      <em>"I thought that I would not score because it was difficult but I tried anyways
      and I acutally managed to score, so that's cool I guess"</em>
      </p>
      <br />
      <p>
      Such inspiring words from such a great great player.
      </p>
      <br />
      <p>
      He finished this very insightful interview with:
      <eh>"As we all know, Association football, more commonly known as football or soccer, is a team sport played with
      a spherical ball between two teams of 11 players. It is played by approximately 250 million players in over 200
      countries and dependencies, making it the world's most popular sport. The game is played on a rectangular field
      called a pitch with a goal at each end. The object of the game is to score by moving the ball beyond the goal line
      into the opposing goal."</em>
      </p>
      <br />
      <p>
      That was a bit random and not too interesting, it almost seemd like the first paragraph of the football's wikipedia page...
      </p>
      `,
  },
  {
    id: 'article_3',
    category: CategoryType.Technology,
    imgSrc: './images/articles/tech1.jpg',
    title: 'Routers or Servers with Nice Lights',
    description: `
      Have you ever thought of having a server?
      Well you surely need to think hard of its leds
      and lights, that's kind of the most important
      feature as it can make your hardware look shiny
      and advanced.
  `,
    content: `
    <p>
    As we all know nice lights are everything in servers and hardware in general,
    it makes it very cool and nice and you will be considered an IT genious just for
    having such a device! Specs? Performance? Cooling? Shut that noise!
    Lights and cool LEDs are what's most important!
    </p>
    <br />
    <p>
    Don't believe me? Check the following out!
    </p>
    <img style="width: 70%; margin: 2rem auto;" src="./images/articles/tech1_extra.jpg">
    <p>
    Do you see how cool and advanced the present compute looks? Can you imagine what it would look
    like without all those nice red lights? it would look totally normal and boring! Even the cooling
    system would not redeeme it!
    </p>
    `,
  },
  {
    id: 'article_4',
    category: CategoryType.Sports,
    imgSrc: './images/articles/sports2.jpg',
    title: 'Cycling Cyclists',
    description: `
      Cyclists usually cycle quite a bit but these cyclist
      are cycling even more than others, they are preparing
      for a very important race after all and they intend
      to do their very best.
  `,
    content: `
    <p>
    Cyclists <em>usually</em> cycle quite a bit but <em>these</em> cyclist
    are cycling <em>even more</em> than others, they are preparing
    for a very important race after all and they intend
    to do their very best.
    </p>
    <br />
    <p>
    Are you rusting on what a cycling race is? do not worry we got you cover!
    Enjoy the following explanation which was <strong>definitely</strong> not taken from wikipedia:
    </p>
    <br />
    <br />
    <p>
    <em>Road bicycle racing</em> is the cycle sport discipline of road cycling, held on paved roads.
    Road racing is the most popular professional form of bicycle racing, in terms of numbers of competitors,
    events and spectators. The two most common competition formats are mass start events, where riders start
    simultaneously (though sometimes with a handicap) and race to set finish point; and time trials, where
    individual riders or teams race a course alone against the clock. Stage races or "tours" take multiple days,
    and consist of several mass-start or time-trial stages ridden consecutively.
    <p>
    <br />
    <p>
    Professional racing has been most popular in Western Europe, centered historically on France, Spain, Italy and
    the Low Countries. Since the mid-1980s the sport has diversified with professional races now held on all
    continents of the globe. Semi-professional and amateur races are also held in many countries. The sport is
    governed by the Union Cycliste Internationale (UCI). As well as the UCI's annual World Championships for men
    and women, the biggest event is the Tour de France, a three-week race that can attract over 500,000
    roadside supporters a day.
    </p>
    `,
  },
  {
    id: 'article_5',
    category: CategoryType.Technology,
    imgSrc: './images/articles/tech2.jpg',
    title: 'Rainbow Laptops',
    description: `
      We all know that light is the most important factor
      when buying your hardware, but we have a new tip for
      you! Have you ever thought of buying a normal laptop
      and shine a rainbow light on it? The result may
      surprise you (or not).
  `,
    content: `<div style="background: black;
                         background: -webkit-linear-gradient(left, orange, green, cyan, blue, violet);
                         background: -o-linear-gradient(right, orange, green, cyan, blue, violet);
                         background: -moz-linear-gradient(right, orange, green, cyan, blue, violet);
                         background: linear-gradient(to right, orange, green, cyan, blue, violet);
                         -webkit-background-clip: text;
                         -webkit-text-fill-color: transparent;">
         <p>Rainbow colors are just so nice, so trying to put them on a laptop is simply natural!</p>
         <br />
         <p>
         But obviously paining over your laptop is not very convenient, so the best thing many of our
         <strong>totally existing</strong> readers have suggested is to just put a rainbow colored light
         on top of your laptop.
         </p>
         <br />
         <p>
         We have tried that and the results are (not) outsanding, as you can see in the image above!
         </p>
         <br />
         <p>
         So next time you get the chance just buy a rainbow colored lamp and shine you laptop!
         But remember not to overheat it or not being able to properly see the screen, as those are
         usualy bad things.
         </p>
    </div>
    `,
  },
  {
    id: 'article_6',
    category: CategoryType.Sports,
    title: 'Another Incredible Goal',
    description: `
      That great player scored another incredible goal!
      This time he shoot from a distance taking every one
      by surprise!
      So we had no choice but to interview him once more,
      thought not as good as the previews one please give this
      interview a chance.
  `,
    content: `
    <p>
      After deciding to have another interview with us that great player stated the following:
      <br />
      <em>
      "Players are not allowed to touch the ball with hands or arms while it is in play, except for the goalkeepers
      within the penalty area. Other players mainly use their feet to strike or pass the ball, but may also use any
      other part of their body except the hands and the arms. The team that scores most goals by the end of the match wins.
      If the score is level at the end of the game, either a draw is declared or the game goes into extra time or a penalty
      shootout depending on the format of the competition."
      </em>
      </p>
      <br />
      <p>
      He then continued with:
      <br />
      <em>
      "The primary law is that players other than goalkeepers may not deliberately handle the ball with their hands or arms
      during play, though they must use both their hands during a throw-in restart. Although players usually use their feet to
      move the ball around they may use any part of their body (notably, "heading" with the forehead) other than their hands
      or arms. Within normal play, all players are free to play the ball in any direction and move throughout the pitch, though
      players may not pass to teammates who are in an offside position.
      </em>
      </p>
      <p>
      <br />
      He concluded his explanation with:
      <br />
      <em>
      "Each team consists of a maximum of eleven players (excluding substitutes), one of whom must be the goalkeeper.
      Competition rules may state a minimum number of players required to constitute a team, which is usually seven.
      Goalkeepers are the only players allowed to play the ball with their hands or arms, provided they do so within
      the penalty area in front of their own goal. Though there are a variety of positions in which the outfield
      (non-goalkeeper) players are strategically placed by a coach, these positions are not defined or required by the Laws."
      </em>
    </p>
    <br />
    <p>
    We were honeslty not impressed by this interview as it very much seems like random football paragraphs gathered from wikipedia
    which explained very basic football concepts.
    </p>
    `,
  },
  {
    id: 'article_7',
    category: CategoryType.Entertainment,
    imgSrc: './images/articles/ent2.jpg',
    title: 'Professional Cameras',
    description: `
      Professional Cameras are great! They can cost a lot but they
      (likely) take videos much better than smartphones.
  `,
    content: `
    <p>
    Professional Cameras are great! They can cost a lot but they
    (likely) take videos much better than smartphones.
    </p>
    <br />
    <p>
    Also professional cameras look obviously much more professional than regular smartphones!
    They have lenses and lots of buttons and stuff so they do look the part!
    </p>
    <br />
    <p>
    Anyways if you didn't know, a <strong>professional video camera</strong> is a high-end device for creating
    electronic moving images (as opposed to a movie camera, that earlier recorded the images on film). Originally
    developed for use in television studios, they are now also used for music videos, direct-to-video movies,
    corporate and educational videos, marriage videos, among other uses. Since the 2010s, most professional video
    cameras are digital professional video cameras.
    </p>
    <br />
    <p>
    With the advent of digital video capture in the 2000s, the distinction between professional video cameras
    and movie cameras disappeared as the intermittent mechanism became the same. Nowadays, mid-range cameras
    exclusively used for television and other works (except movies) are termed as professional video cameras.
    </p>
    `,
  },
];

export const articleCardsData: ArticleCardData[] = articles
  .slice(1)
  .map((article: ArticleData, idx: number) => {
    const horizontalDisplay = idx === 0 || idx === articles.length - 2;
    const reverseOrder = idx === articles.length - 2 || idx === 3;
    const background =
      idx === 1
        ? ArticleCardBackground.Dark
        : idx === 5
        ? ArticleCardBackground.Primary
        : ArticleCardBackground.Default;
    return {
      article,
      horizontalDisplay,
      reverseOrder,
      background,
    };
  });
