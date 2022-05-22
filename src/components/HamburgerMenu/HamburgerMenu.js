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
        <HamburgerMenuDiv clicked={clicked}>
            <Button reference = "/sign-in">Sign in</Button>
            <Button reference = "/register" >Register</Button>
            <Button isSecondary reference = "/profile" >Profile</Button>
            <Button isSecondary reference = "/courses" >Courses</Button>
        </HamburgerMenuDiv>
        </>
    )
}

export default HamburgerMenu