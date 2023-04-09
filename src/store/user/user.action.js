import { USER_ACTION_TYPES } from "./user.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setCurrentUser = (user) => 

//returns back the action object (using createAction helper function)
    createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
    

    