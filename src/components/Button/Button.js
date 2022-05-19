import React from "react";
import { useNavigate } from "react-router-dom";
import {Button as ButtonComponent} from './ButtonStyle'

const Button = ({reference, children, isNav, isHeading, isOutline, isSecondary}) => {

    let navigate = useNavigate();
    const handleClick = () => {
        if(reference) navigate(reference)
    }

    return (
        <ButtonComponent 
            isNav={isNav} 
            isHeading={isHeading}
            isOutline={isOutline}
            isSecondary={isSecondary}
            onClick={handleClick}>
                {children}
        </ButtonComponent>
    )
}

export default Button;