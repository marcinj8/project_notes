import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from '../../Data/Store/Actions/SingleProjectActions';
import ListCreator from '../../Components/List/LstCreator';

import { ProjectViewStyled, ProjectHeaderStyled, ProjectWarningStyled } from './ProjectsList.scss';

const Project = ({ project, choosedProjectHandlerOnClick, id, setCurrentProject }) => {

    const onClickHandler = () => {
        choosedProjectHandlerOnClick();
        setCurrentProject(id, project.name)
    }
    
    return (
        <ProjectViewStyled >
            <Link
                to={'/project/' + id}
            >
                <ProjectHeaderStyled onClick={onClickHandler}>
                    {project.name}
                </ProjectHeaderStyled>
            </Link>
            <div>
                <div>
                    Status: {project.status}
                </div>
                <div>
                    Start date: {project.startDate}
                </div>
                <div>
                    Dead line: {project.deadLineDate}
                </div>
                {
                    project.repository.length > 0
                        ? (
                            <div>
                                Repository:
                                <a href={project.repository} to={project.repository}>
                                    {project.repository}
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
                    project.onLine.length > 0
                        ? (
                            <div>
                                Website:
                                <a href={project.onLine} to={project.onLine}>
                                    {project.onLine}
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
                {project.notes.length > 0
                    ? (
                        <ListCreator
                            list={project.notes}
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