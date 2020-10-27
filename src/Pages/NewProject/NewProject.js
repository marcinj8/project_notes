import React from 'react';

import { setUpState } from './DataNewProject';
import { FormGenerator } from '../../Components';

import formData from './newProjectProperties.json';

class NewProject extends React.Component {
    constructor(props) {
        super(props);
        this.state = setUpState(formData.main)
    }

    addToDo = toDoName => {
        const toDoUpdated = {...this.state.toDo} || {};
        toDoUpdated[toDoName] = {};
        this.setState({
            showToDoDetailsFrom: true,
            toDo: toDoUpdated
        })
    }

    setToDoDetail = (property, value) => {
        const toDo = { ...this.state.toDo } || {};
        console.log(property, value)
        if (property === 'name') {
            toDo[value] = {};
            // const temporaryValueUpdated = identyfikacja za pomocą wartości numberOfInputs + numeracja toDo przy wprowadzaniu
        }
        this.setState({
            toDo: toDo
        })
        console.log(toDo)

    }

    changeHandler = e => {
        const isTodo = e.target.id.slice(0, 4);
        if (isTodo === 'toDo') {
            const toDoProperty = e.target.id.slice(4);
            return this.setToDoDetail(toDoProperty, e.target.value);
        }

        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {
        console.log(this.state)
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