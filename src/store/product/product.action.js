import { CATEGORIES_ACTION_TYPES } from './product.type';
import { createAction } from '../../Utils/Reducer.util';

export const setCategories = (categoriesArray) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray);