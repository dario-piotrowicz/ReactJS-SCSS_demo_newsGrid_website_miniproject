import { CategoryType } from './enums';

export type Article = {
  id: string;
  category: CategoryType;
  imgSrc?: string;
  title: string;
  description: string;
};
