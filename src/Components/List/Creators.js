import React from 'react';

import List from './LstCreator';

import { ListItemStyled, ListItemHeaderStyled } from './ListCreator.scss';

export const arrayToList = list => {
    return list.map((item, index) => {
        return (
            <ListItemStyled key={item + index}>
                {item}
            </ListItemStyled>
        )
    })
};

const toDoListCreator = data => {

    return (
        <div>
            <div>
                Priority: {data.priority}
            </div>
            <div>
                Position {data.isActive ? 'active' : 'closed'} with status {data.status}
            </div>
            <div>
                {data.description}
            </div>
           
            <List
                list={data.toDoNote}
                header='history of changes'
            />
        </div>
    )
}

export const objectToList = (list, header) => {

    let details = null;

    return Object.keys(list).map(key => {
        if (header === 'Things to do') {
            details = toDoListCreator(list[key])
        }
        return (
            <ListItemStyled key={key}>
                <ListItemHeaderStyled>
                    {key}
                </ListItemHeaderStyled>
                <div>
                    {details}
                </div>
            </ListItemStyled>
        )
    })
};