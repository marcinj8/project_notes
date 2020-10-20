import axios from 'axios';

import * as actionTypes from './ProjectActionTypes';

const loadingStarted = () => ({
    type: actionTypes.LOADING_STARTED,
    loadedData: 'typeOfData'
})

const showData = res => {
    console.log(res)
    return ({
        type: actionTypes.LOADING_SUCCESS,
        data: res.data
    })
}

const reportError = err => {
    return {
        type: actionTypes.ERROR_OCCURED,
        error: {
            occured: true,
            message: err.message
        }
    }
};

export const getData = () => {
    return dispatch => {
        dispatch(loadingStarted());
        axios.get('http://localhost:3001/projects')
            .then(res => dispatch(showData(res)))
            .catch(err => dispatch(reportError(err)))
    }
}