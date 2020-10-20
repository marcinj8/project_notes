import React from 'react';

const ProjectDetails = ({ project }) => {
    console.log(project.deadLIneDate)
    return (
        <div>
            <div>
                {project.deadLineDate}
            </div>
            <button>edit</button>
        </div>
    )
}

export default ProjectDetails;