import { CategoryType, ArticleCardBackground } from './enums';
import { ArticleData, ArticleCardData } from './types';

export const articles: ArticleData[] = [
  {
    id: 'article_0',
    category: CategoryType.Sports,
    imgSrc: './images/showcase.jpg',
    title: 'White ESU agains Black 55',
    description: `
    It is again that time of the year, the great ESU with their white
    uniforms are about to dooke it out with the fearsome team 55 which
    is porting a black-ish uniform. Join us as we're going to discuss
    what to expect from these fantastic teams.
  `,
    content: '',
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
    content: '',
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
    content: '',
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
    content: '',
  },
  {
    id: 'article_4',
    category: CategoryType.Sports,
    imgSrc: './images/articles/sports1.jpg',
    title: 'Cycling Cyclists',
    description: `
      Cyclists usually cycle quite a bit but these cyclist
      are cycling even more than others, they are preparing
      for a very important race after all and they intend
      to do their very best.
  `,
    content: '',
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
    content: '',
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
      thought not too happy about that he complied.
  `,
    content: '',
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
    content: '',
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
