import styled from 'styled-components'
import {ReactComponent as HamburgerIcon} from '../../assets/images/icon-hamburger.svg';
import {colors, breakpoints} from '../../lib/style/theme'

export const Hamburger = styled(HamburgerIcon)`
    width: 30px;
    height: auto;
    z-index: 2;

    path {
        fill: ${colors.secondary};
    }

    @media (${breakpoints.desktop}) {
        display: none;
    }


`

export const HamburgerMenu = styled.div`
    display: none;
    background-color: ${colors.textPrimary};
    border-radius:0 0 0 200px;
    z-index: 1;

    ${(props) => props.clicked && `
            position absolute;
            display:flex;
            flex-direction:column;
            row-gap:80px;
            justify-content:center;
            align-items:center;
            left:0;
            top:0;
            width: 100%;
            height: 70vh;
    `}

    @media (${breakpoints.desktop}) {
        display: none;
    }

    @media (${breakpoints.tablet}) {
        border-radius:0 0 0 100px ;
        left: 50%;
        width: 50%;
    }
`
