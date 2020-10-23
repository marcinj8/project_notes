import * as actionTypes from '../Actions/SingleProjectActionTypes';

const initialState = {
    currentProjectKey: '',
    currentProjectName: '',
    lastEdited: '02/05/2020',
    currentProjectUpdatedOnApp: false
}

const setProject = (state, key, name) => {
    return {
        ...state,
        currentProjectKey: key,
        currentProjectName: name,
        currentProjectUpdatedOnApp: true
    }
}

const singleProjectReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_CURRENT_PROJECT: return setProject(state, action.key, action.name)
        default: return state;
    }
}

export default singleProjectReducer;
