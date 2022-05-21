import {React} from "react";
import Logo from '../../assets/images/logo.svg'
import Button from "../Button/Button.js";
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu.js'
import { 
    Header as HeaderWrapper, 
    HeaderInner, 
    LogoLink, 
    LogoImg as LogoElem,  
    Nav, 
    HeaderNavLink, 
    ButtonLink } from "./HeaderStyle";

const Header = ({isSecondary}) => {

    return (
        <HeaderWrapper isSecondary={isSecondary}>
            <HeaderInner>
                <LogoLink to={'/'}>
                    <LogoElem src={Logo} alt="Academy logo" />
                </LogoLink>
                <HamburgerMenu />
                <Nav>
                    <HeaderNavLink to={"/courses"}>Courses</HeaderNavLink>
                    <ButtonLink to={"/"}>
                        <Button  isNav isHeading>Sign in</Button>
                    </ButtonLink>
                    <ButtonLink to={"/"}>
                        <Button isNav isHeading isSecondary>Register</Button>
                    </ButtonLink>
                </Nav>
            </HeaderInner>
        </HeaderWrapper>
    )
}

export default Header;