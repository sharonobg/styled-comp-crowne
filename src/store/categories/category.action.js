import { CATEGORIES_ACTION_TYPES } from "./category.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setCategories = (category) => 
//returns back the action object (using createAction helper function)
    createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, category);