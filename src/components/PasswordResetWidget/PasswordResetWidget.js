import React from "react";
import {Widget} from './PasswordResetWidgetStyle'

const PasswordResetWidget = ({children, isActive}) => {
    return (
        <Widget isActive={isActive}>
            {!isActive ? (<div><h3>Password reset</h3><p>In order to reset password click on Edit button</p></div>):{...children}}
        </Widget>
    )
}

export default PasswordResetWidget;