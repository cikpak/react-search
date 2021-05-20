import { SET_FILTER_RESULTS } from '../actionsTypes'

const initialState = {
    query: null,
    searchResults: [],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILTER_RESULTS: {
            return {
                ...state,
                ...action.payload
            };
        }

        default:
            return state;
    }
}

export default usersReducer