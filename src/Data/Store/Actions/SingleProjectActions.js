import * as actionTypes from './SingleProjectActionTypes';

export const setCurrentProject = (key, name) => {
    return {
        type: actionTypes.SET_CURRENT_PROJECT,
        key,
        name
    }
}