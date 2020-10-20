import React from 'react';
import { connect } from 'react-redux';

import List from './ProjectsList';

const ProjectsListContainer = ({ projectList, isLoaded }) => {

    if (!isLoaded) {
        return (
            <div>
                Loading...
            </div>
        )
    }
    return (
        <div>
            <List
                projectList={projectList} />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        projectList: state.projectsReducer.projects
    }
}

export default connect(mapStateToProps)(ProjectsListContainer);