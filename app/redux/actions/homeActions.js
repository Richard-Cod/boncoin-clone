//Action Types
export const SET_CATEGORY_TITLE = "SET_CATEGORY_TITLE";
export const SET_CITY_TITLE = "SET_CITY_TITLE";


//Action Creator
export const setCategoryTitle = (title) => ({
   type: SET_CATEGORY_TITLE,
   payload : title,
});



export const setCityTitle = (title) => ({
   type: SET_CITY_TITLE,
   payload : title,
});
