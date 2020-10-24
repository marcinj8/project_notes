import React from 'react';

import { FormGenerator } from '../../Components';

import formData from './newProjectProperties.json';

class NewProject extends React.Component {
    state = {
        projectName: "",
        projectStatus: "new, planing, production, finished",
        isActive: true,
        projectStartDate: "",
        projectDeadLine: "",
        repositoryLink: "link",
        onlineAddrss: 'link',
        projectAssumptions: [],
        projectNotes: [],
        toDo: {
            "toDo 1": {
                isActive: 'true false',
                status: "new, in process, resolved, failed, rejected",
                priority: "low medium high",
                description: "toDo 1 description",
                toDoNote: []
            }
        }
    }

    changeHandler = e => {
        console.log(e.target.id)
    }

    render() {
        return (
            <form>
                <FormGenerator
                    formDataObj={formData.main}
                    changeHandler={this.changeHandler}
                />
                <button>add project</button>
            </form>
        )
    }

}

export default NewProject;