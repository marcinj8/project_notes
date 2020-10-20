import React from 'react';

import Project from './Project';

import { ProjectsViewStyled } from './ProjectsList.scss';

const List = ({ projectList }) => {

    const choosedProjectHandler = id => {
        console.log(id)
    }

    const list = Object.keys(projectList).map(projectKey => {
        return (
            <Project
                key={projectKey}
                id={projectKey}
                project={projectList[projectKey]}
                choosedProjectHandlerOnClick={() => choosedProjectHandler(projectKey)}
            />
        )
    })

    return (
        <ProjectsViewStyled>
            {list}
        </ProjectsViewStyled>
    )
}

export default List;