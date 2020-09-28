import React, { useMemo } from 'react';

import * as button from './Button.scss';

const Button = ({ children, type, click, link, ...config }) => {

    const buttonConfig = config.config || null;
    const Component = useMemo(() => {
        switch (type) {
            case 'primary': return button.PrimaryButtonStyled;
            case 'secondary': return button.SecondaryButtonStyled;
            case 'tile': return button.ProjectTileButtonStyled;
            case 'menu': return button.MenuButtonStyled;
            case 'close': return button.CloseMenuButtonStyled;
            default: return button.PrimaryButtonStyled;
        }

    }, [type])

    return (
        <Component config={{ ...buttonConfig }} onClick={click}>
            {children}
        </Component>
    )
}

export default Button;