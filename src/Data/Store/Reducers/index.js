import { combineReducers } from 'redux'

import projectsReducer from './ProjectsReducer';
import singleProjectReducer from './SingleProjectReducer';

export const rootReducer = combineReducers({ projectsReducer, singleProjectReducer});
