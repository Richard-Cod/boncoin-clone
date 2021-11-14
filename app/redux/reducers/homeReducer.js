import {SET_CATEGORY_TITLE , SET_CITY_TITLE} from '../actions/homeActions';

const homeReducer = (state = {categoryTitle: "catégoriesDefaultTitle" , cityTitle : null}, action) => {
    switch (action.type) {
        case SET_CATEGORY_TITLE:
            const categoryTitle = action.payload
            return {...state, categoryTitle };
        case SET_CITY_TITLE:
            const cityTitle = action.payload
            return {...state, cityTitle };
        default:
            return {...state};
    }
};

export default homeReducer;
