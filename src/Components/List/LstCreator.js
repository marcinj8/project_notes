import React, { useEffect, useMemo, useRef, useState } from 'react';

import * as Creators from './Creators';
import { showList, hideList } from './ListAnimations';

import { CreatedListStyled, ListHeaderStyled } from './ListCreator.scss';

const ListCreator = ({ list, header, click }) => {

    // console.log(click)
    // 3 buttons - add, edit, delete

    const [show, toogleShow] = useState(false);
    const listRef = useRef(null);

    useEffect(() => {
        if (show) {
            return showList(listRef);
        }
        if (!show) {
            return hideList(listRef);
        }

    })

    const createdList = useMemo(() => {
        if (Array.isArray(list)) {
            return Creators.arrayToList(list);
        } else if (typeof list === 'object') {
            return Creators.objectToList(list, header);
        }
    }, [list, header]);

    return (
        <React.Fragment>
            {
                header
                    ? (
                        <ListHeaderStyled
                            isListShow={show}
                            onClick={() => toogleShow(show ? false : true)}
                        >{header}
                        </ListHeaderStyled>
                    )
                    : null
            }
            <CreatedListStyled ref={listRef}>
                {createdList}
            </CreatedListStyled>
        </React.Fragment>
    )
}

export default ListCreator;