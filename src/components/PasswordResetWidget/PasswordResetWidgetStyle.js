import styled from 'styled-components'
import { colors } from '../../lib/style/theme'

export const Widget = styled.div `
    width: 400px;
    background-color: ${colors.boxShadowPrimary};
    display:flex;
    align-content:flex-start;
    padding: 40px;
    height: 200px;

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