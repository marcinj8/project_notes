import React from 'react';

class NewProject extends React.Component {
    state= {
        name: "",
        status: "new, planing, production, finished",
        startDate: "",
        deadLineDate: "",
        repository: "link",
        onLine: 'link',
        projectAssumptions: [],
        notes: [],
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

    render(){
        return (
            <div>
                <div>name as string</div>
                <div>status is active: true or false</div>
                <div>start date: choosing date</div>
                <div>deadline: choosing date</div>
                <div>repository link</div>
                <div>online addres</div>
                <div>project assumptions in arr</div>
                <div>notes in arr</div>
                <div>to do in obj</div>
            </div>
        )
    }
    
}

export default NewProject;