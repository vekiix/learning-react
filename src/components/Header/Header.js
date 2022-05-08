import React from "react";
import  "./Header.scss"
import Logo from '../../assets/images/logo.svg'
import Button from "../Button/Button.js";
import { NavLink } from "react-router-dom";

const Header = ({modifiers}) => {
    const modifierClasses = {
        secondary: "Header_secondary"
    }

    let headerClasses = "Header";
    let navClass = "Header-NavLink";

    if(modifiers) {
        modifiers.map(modifier => {
            return headerClasses += " " + modifierClasses[modifier]
        })
    }
    
    return (
        <header className={headerClasses}>
            <div className="Header-Inner">
                <NavLink 
                    to="/"
                    className="Header-LogoLink" >
                    <img src ={Logo} alt="Academy logo" className="Header-Logo" />
                </NavLink>
                <svg className="Header-Hamburger" width="200" height="200" viewBox="0 0 448 392" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 72H432C440.837 72 448 64.837 448 56V16C448 7.163 440.837 0 432 0H16C7.163 0 0 7.163 0 16V56C0 64.837 7.163 72 16 72ZM16 232H432C440.837 232 448 224.837 448 216V176C448 167.163 440.837 160 432 160H16C7.163 160 0 167.163 0 176V216C0 224.837 7.163 232 16 232ZM16 392H432C440.837 392 448 384.837 448 376V336C448 327.163 440.837 320 432 320H16C7.163 320 0 327.163 0 336V376C0 384.837 7.163 392 16 392Z" fill="black"/>
                </svg>
                <nav className="Header-Nav">
                    <NavLink 
                        to="/courses"
                        className={({isActive}) => (isActive ? navClass + " Header-NavLink_selected" : navClass)} >
                            Courses
                    </NavLink>
                    <NavLink 
                        to="/signin"
                        className="Header-NavButton">
                        <Button modifiers={['nav']}>Sign In</Button>
                    </NavLink>
                    <NavLink 
                        to="/register"
                        className="Header-NavButton">
                        <Button modifiers={['nav','secondary']}>Register</Button>
                    </NavLink>
                </nav>
            </div>
       </header>
    )
}

export default Header;