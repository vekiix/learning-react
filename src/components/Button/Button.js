import React from "react";
import { useNavigate } from "react-router-dom";
import "./Button.scss";

const Button = ({children, modifiers, reference}) => {
    const modifierClasses = {
        secondary: 'Button_secondary',
        nav: 'Button_nav',
        landing: 'Button_landing',
        heading: 'Button_heading',
        outline: 'Button_outline'
    } 

    let buttonClasses = "Button";
    let navigate = useNavigate();

    modifiers && modifiers.map(modifier => buttonClasses += " " + modifierClasses[modifier])

    const handleClick = () => {
        if(reference) navigate(reference)
    }

    return (
        <button className={buttonClasses} onClick={handleClick}>
             {children} 
        </button>
    )
}

export default Button;