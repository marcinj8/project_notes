import React from 'react';

const ProjectDetails = ({ project }) => {
    // console.log(project)
    return (
        <div>
            <div>
                {project.projectDeadLine}
            </div>
            <button>edit</button>
        </div>
    )
}

export default ProjectDetails;