import axios from 'axios';

import * as actionTypes from './ProjectActionTypes';

const loadingStarted = () => ({
    type: actionTypes.LOADING_STARTED,
    loadedData: 'typeOfData'
})

const showData = res => ({
    type: actionTypes.LOADING_SUCCESS,
    data: res.data
})

const reportError = err => {
    return {
        type: actionTypes.ERROR_OCCURED,
        error: {
            occured: true,
            message: err.message
        }
    }
};

const getFakeData = (success) => { // production
    return dispatch => {
        dispatch(loadingStarted());
        console.log('fake data started with succes set on: ' + success);
        if (success) {
            dispatch(showData({
                data: 'data'
            }))
        } else if (!success) {
            dispatch(reportError({
                message: 'controlled error MJ'
            }))
        }
    }
}

export const getData = () => {
    // production
    // getFakeData();
    return dispatch => {
        // production
        dispatch(getFakeData(true));
        // production

        // dispatch(loadingStarted());
        // axios.get('https://mypss-84b62.firebaseio.com/.json')
        //     .then(res => dispatch(showData(res)))
        //     .catch(err => dispatch(reportError(err)))
    }
}




