import { CategoryType, ArticleCardBackground } from './enums';

export type ArticleData = {
  id: string;
  category: CategoryType;
  imgSrc?: string;
  title: string;
  description: string;
  content: string;
};

export type ArticleCardData = {
  article: ArticleData;
  horizontalDisplay?: boolean;
  reverseOrder?: boolean;
  background?: ArticleCardBackground;
};
