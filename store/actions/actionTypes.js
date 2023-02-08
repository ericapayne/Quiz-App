export const UPDATE_CATEGORIES = "UPDATE_CATEGORIES";
export const UPDATE_CATEGORIES = "UPDATE_QUIZ";


export const updateCategories = update => ({
    type: UPDATE_CATEGORIES,
    payload: update
  });

  export const updateQuiz = update => ({
    type: UPDATE_QUIZ,
    payload: update
  });