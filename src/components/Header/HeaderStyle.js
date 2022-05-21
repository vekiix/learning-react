import styled from 'styled-components';
import {ReactComponent as HamburgerIcon} from '../../assets/images/icon-hamburger.svg';
import {colors, breakpoints} from '../../lib/style/theme';
import {NavLink, Link} from 'react-router-dom';


export const Header = styled.header`
    position: absolute;
    top: 0;
    left: 0;
    padding: 24px;
    width: 100%;
    z-index: 2;

    @media (${breakpoints.desktop}) {
        padding: 32px 0;
    }

    ${props => props.isSecondary && `
        position: initial;
        background: ${colors.textPrimary};
    `}
`;

export const HeaderInner = styled.div`

        display: flex;
        justify-content: space-between;
        align-items: center;

        @media (${breakpoints.desktop}) {
            width: 960px;
            margin: 0 auto;
        }

        @media (${breakpoints.desktopLarge}) {
            width: 1260px;
        }    
`

export const LogoLink = styled(Link)``;

export const LogoImg = styled.img `
    width: 140px;
`
export const Hamburger = styled(HamburgerIcon)`
    width: 30px;
    height: auto;

    path {
        fill: ${colors.secondary};
    }

    @media (${breakpoints.desktop}) {
        display: none;
    }
`

export const Nav = styled.div `
    display: none;

    @media (${breakpoints.desktop}){
        display: inline-flex;
        align-items: center;
    }
`

export const HeaderNavLink = styled(NavLink)`
        position: relative;
        text-decoration: none;
        display: inline-block;
        color: ${colors.secondary};
        letter-spacing: 1px;
        margin-right: 48px;
        transition: color 0.3s ease-out;

        &:after {
            opacity: 0;
            position: absolute;
            left: 0;
            bottom: -6px;
            border-radius: 8px;
            content: "";
            height: 2px;
            width: 100%;
            background: ${colors.secondary};
            transition: opacity 0.3s ease-out;
        }

        &:hover:after {
            opacity: 1;
        }
       &.active:after {
           opacity: 1;
       }
`

export const ButtonLink = styled(Link)`
    display: inline-block;
    margin-right: 24px;
    text-decoration: none;

    &:last-child {
        margin-right: 0px;
    }
`