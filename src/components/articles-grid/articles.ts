import { CategoryType, ArticleCardBackground } from '../../common/enums';
import { ArticleData, ArticleCardData } from '../../common/types';

const articles: ArticleData[] = [
  {
    id: 'article_0',
    category: CategoryType.Entertainment,
    imgSrc: './images/articles/ent1.jpg',
    title: 'Lorem ipsum dolor sit amet',
    description: `
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
  tempora impedit vitae, voluptate, numquam nesciunt est minima
  consequuntur explicabo ut maiores, eum repellat saepe corrupti!
  `,
  },
  {
    id: 'article_1',
    category: CategoryType.Sports,
    title: 'Lorem ipsum dolor sit amet',
    description: `
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
  tempora impedit vitae, voluptate, numquam nesciunt est minima
  consequuntur explicabo ut maiores, eum repellat saepe corrupti!
  `,
  },
  {
    id: 'article_3',
    category: CategoryType.Technology,
    imgSrc: './images/articles/tech1.jpg',
    title: 'Lorem ipsum dolor sit amet',
    description: `
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
  tempora impedit vitae, voluptate, numquam nesciunt est minima
  consequuntur explicabo ut maiores, eum repellat saepe corrupti!
  `,
  },
  {
    id: 'article_4',
    category: CategoryType.Sports,
    imgSrc: './images/articles/sports1.jpg',
    title: 'Lorem ipsum dolor sit amet',
    description: `
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
  tempora impedit vitae, voluptate, numquam nesciunt est minima
  consequuntur explicabo ut maiores, eum repellat saepe corrupti!
  `,
  },
  {
    id: 'article_5',
    category: CategoryType.Technology,
    imgSrc: './images/articles/tech2.jpg',
    title: 'Lorem ipsum dolor sit amet',
    description: `
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
  tempora impedit vitae, voluptate, numquam nesciunt est minima
  consequuntur explicabo ut maiores, eum repellat saepe corrupti!
  `,
  },
  {
    id: 'article_6',
    category: CategoryType.Sports,
    title: 'Lorem ipsum dolor sit amet',
    description: `
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
  tempora impedit vitae, voluptate, numquam nesciunt est minima
  consequuntur explicabo ut maiores, eum repellat saepe corrupti!
  `,
  },
  {
    id: 'article_7',
    category: CategoryType.Entertainment,
    imgSrc: './images/articles/ent2.jpg',
    title: 'Lorem ipsum dolor sit amet',
    description: `
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
  tempora impedit vitae, voluptate, numquam nesciunt est minima
  consequuntur explicabo ut maiores, eum repellat saepe corrupti!
  `,
  },
];

export const articleCardsData: ArticleCardData[] = articles.map(
  (article: ArticleData, idx: number) => {
    const horizontalDisplay = idx === 0 || idx === articles.length - 1;
    const reverseOrder = idx === articles.length - 1 || idx === 3;
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
  }
);
