import { combineReducers } from "redux";

import { UPDATE_CATEGORIES, UPDATE_QUIZ } from "../actions/actionTypes";

const categoryReducer = (state = [], action) => {
    if (action.type === UPDATE_CATEGORIES) return [...state, ...action.payload];
    return state;
};

const quizReducer = (state = {}, action) => {
    if (action.type === UPDATE_QUIZ) return [...state, ...action.payload];
    return state;
};

const reducer = combineReducers({
    catergory: categoryReducer,
    quiz: quizReducer,
});

export default reducer;

