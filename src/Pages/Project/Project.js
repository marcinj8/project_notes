import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import { useQuery } from 'react-query';
import { withRouter } from 'react-router-dom';

import { fetchProjectData } from '../../Data/FetchData'
import ProjectDetails from './ProjectDetails';
import { StatusHandler } from '../../Components';

const Project = (props) => {
    const projectId = useMemo(() => {
        return props.match.params.projectId
    }, [props.match.params.projectId])

    const { data, status, error } = useQuery(
        ['projectData', projectId],
        fetchProjectData
    );

    let choosedProject = null;
    if (status === 'success') {
        choosedProject = data.data[projectId]; // filtrowanie projektu przy braku możliwości pobrania konkretnego projektu
    } else {
        return (
            <StatusHandler
                status={status}
                error={error}
            />
        )
    };

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