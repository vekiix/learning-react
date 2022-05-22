import React from "react";
import { useNavigate } from "react-router-dom";
import {Button as ButtonComponent} from './ButtonStyle'

const Button = ({type, reference, callback, children, isNav, isHeading, isOutline, isSecondary}) => {
    let navigate = useNavigate();
    const handleClick = () => {
        if(reference) navigate(reference)
        return
    }
    return (
        <ButtonComponent 
            type={type}
            isNav={isNav} 
            isHeading={isHeading}
            isOutline={isOutline}
            isSecondary={isSecondary}
            onClick={reference ? handleClick : callback}
            >
                {children}
        </ButtonComponent>
    )
}

export default Button;