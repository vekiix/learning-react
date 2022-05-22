import React, { useState } from "react";
import Button from "../Button/Button";
import { Hamburger, HamburgerMenu as HamburgerMenuDiv} from './HamburgerMenuStyle'

const HamburgerMenu = () => {
    const [clicked, setClicked ] = useState(null);
    const handleClick = () => {
        setClicked(clicked ? false : true);
    }

    return (
        <>
        <Hamburger onClick={handleClick}/>
        <HamburgerMenuDiv clicked={clicked} onClick={handleClick}>
            <Button isNav isOutline reference = "/sign-in">Sign in</Button>
            <Button isNav isOutline reference = "/register" >Register</Button>
            <Button isSecondary isOutline reference = "/profile" >Profile</Button>
            <Button isSecondary isOutline reference = "/courses" >Courses</Button>
        </HamburgerMenuDiv>
        </>
    )
}

export default HamburgerMenu