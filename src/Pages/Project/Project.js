import React from 'react';
import { useQuery } from 'react-query';
import { withRouter } from 'react-router-dom';

import { fetchProjectData } from '../../Data/FetchData'
import ProjectDetails from './ProjectDetails';
import { StatusHandler } from '../../Components';

const Project = (props) => {
    // console.log(props, props.match.params.projectId);
    const projectId = props.match.params.projectId;
    const { data, status, isLoading, error } = useQuery(
        ['projectData', projectId],
        fetchProjectData
    );

    let choosedProject = null;

    if (status === 'success') {
        choosedProject = data.data[projectId];
    } else {
        return (
            <StatusHandler
                status={status}
                error={error}
            />
        )
    };
    // console.log(data, status, isLoading, error);

    return (
        <div>
            <h4>{choosedProject.name}</h4>
            <ProjectDetails
                project={choosedProject}
            />
        </div>
    )
}

export default withRouter(Project);