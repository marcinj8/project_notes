import * as actionTypes from '../Actions/ProjectActionTypes';

const initialState = {
    projects: null,
    loading: false,
    isLoaded: false,
    loadingStatus: null,
    error: {
        occured: false,
        message: null
    }
}

const projectsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOADING_STARTED: return {...state, loading: true};
        case actionTypes.LOADING_SUCCESS: return {...state, loading: false, isLoaded: true, projects: action.data };
        case actionTypes.ERROR_OCCURED: return state;
        default: return state
    }
}

export default projectsReducer;