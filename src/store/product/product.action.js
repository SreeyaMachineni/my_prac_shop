import { CATEGORIES_ACTION_TYPES } from './product.type';
import { createAction } from '../../Utils/Reducer.util';
import { getProducts } from '../../Utils/Product.util';

// export const setCategories = (categoriesArray) =>
//   createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray);

export const fetchCategoriesStart = () => 
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START)

export const fetchCategoriesSuccess = (categoriesArray) => 
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,categoriesArray)

export const fetchCategoriesFail = (error) => 
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error)

export const fetchCategoryAsync = () => async(dispatch)=>{
  dispatch(fetchCategoriesStart())
   getProducts().then(
    (response)=> response.json())
    .then((res)=>{  dispatch(fetchCategoriesSuccess(res))})
    .catch((error)=>dispatch(fetchCategoriesFail(error)))

}