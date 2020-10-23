import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'

const Home = ({ currentProjectNameReducer, lastEditedReducer, currentProjectUpdatedOnApp, projectIdReducer }) => {

    return (
        <div>
            home page
            <div>
                greetings after login
            </div>
            <div>
                current date
            </div>
            <div>
                {
                    currentProjectUpdatedOnApp
                        ? <div>
                            <span>
                                last edited: {currentProjectNameReducer} at {lastEditedReducer}
                            </span>
                            <button type="">
                                <NavLink
                                    to={'/project/' + projectIdReducer}
                                >
                                    Go to project
                                </NavLink>
                            </button>
                        </div>
                        : <span>last edited loading...</span>
                }
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        currentProjectNameReducer: state.singleProjectReducer.currentProjectName,
        projectIdReducer: state.singleProjectReducer.currentProjectKey,
        lastEditedReducer: state.singleProjectReducer.lastEdited,
        currentProjectUpdatedOnApp: state.singleProjectReducer.currentProjectUpdatedOnApp,
    }
}

export default connect(mapStateToProps)(Home);