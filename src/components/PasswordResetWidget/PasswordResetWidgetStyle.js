import styled from 'styled-components'
import { colors, breakpoints } from '../../lib/style/theme'

export const Widget = styled.div `
    width: 100%;
    background-color: ${colors.boxShadowPrimary};
    display:flex;
    align-content:flex-start;
    padding: 40px;
    border-radius: 15px;
    height: 200px;

    @media (${breakpoints.tablet}) {
        width: 400px;
    }  

    ${props => props.isActive && `
        height:600px;
    `}

    h3{
        font-size: 16px;
        margin-bottom: 30px;
    }

    p{
        font-size: 14px;
    }
`