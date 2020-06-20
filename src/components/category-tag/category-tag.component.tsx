import React, { FunctionComponent } from 'react';
import './category-tag.styles.scss';
import { CategoryType } from '../../common/enums';

type CategoryTagProps = {
  type: CategoryType;
};

const CategoryTag: FunctionComponent<CategoryTagProps> = ({ type }) => {
  return <div className={`category-tag ${type}`}>{type}</div>;
};

export default CategoryTag;
