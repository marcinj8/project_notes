import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from '../../Data/Store/Actions/SingleProjectActions';
import ListCreator from '../../Components/List/LstCreator';

import { ProjectViewStyled, ProjectHeaderStyled, ProjectWarningStyled } from './ProjectsList.scss';

const Project = ({ project, choosedProjectHandlerOnClick, id, setCurrentProject }) => {

    const onClickHandler = () => {
        choosedProjectHandlerOnClick();
        setCurrentProject(id, project.projectName)
    }
    
    return (
        <ProjectViewStyled >
            <Link
                to={'/project/' + id}
            >
                <ProjectHeaderStyled onClick={onClickHandler}>
                    {project.projectName}
                </ProjectHeaderStyled>
            </Link>
            <div>
                <div>
                    Status: {project.projectStatus}
                </div>
                <div>
                    Start date: {project.projectStartDate}
                </div>
                <div>
                    Deadline: {project.projectDeadLine}
                </div>
                {
                    project.repositoryLink.length > 0
                        ? (
                            <div>
                                Repository:
                                <a href={project.repositoryLink} to={project.repositoryLink}>
                                    {project.repositoryLink}
                                </a>
                            </div>
                        )
                        : (
                            <ProjectWarningStyled>
                                Repository not added
                            </ProjectWarningStyled>
                        )
                }
                {
                    project.onlineAddrss.length > 0
                        ? (
                            <div>
                                Website:
                                <a href={project.onlineAddrss} to={project.onlineAddrss}>
                                    {project.onlineAddrss}
                                </a>
                            </div>
                        )
                        : (
                            <ProjectWarningStyled>
                                Website not available
                            </ProjectWarningStyled>
                        )
                }
                {project.projectAssumptions.length > 0
                    ? (
                        <ListCreator
                            list={project.projectAssumptions}
                            header='Assumptions'
                        />
                    )
                    : null
                }
                {project.projectNotes.length > 0
                    ? (
                        <ListCreator
                            list={project.projectNotes}
                            header='Notes'
                        />
                    )
                    : null
                }
                {Object.keys(project.toDo).length > 0
                    ? (
                        <ListCreator
                            list={project.toDo}
                            header='Things to do' />
                    )
                    : null
                }
            </div >
        </ProjectViewStyled >
    )
}

const mapDipsatchToProps = dispatch => {
    return {
        setCurrentProject: (...args) => dispatch(actions.setCurrentProject(...args))
    }
}

export default connect(null, mapDipsatchToProps)(Project);