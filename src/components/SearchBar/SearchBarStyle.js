import styled from 'styled-components'
import {breakpoints, colors} from '../../lib/style/theme'

export const SearchBar = styled.input`
    padding-top: 0px;
    padding-left: 15px;
    padding-right: 15px;
    margin-bottom: 40px;
    border: 1px solid ${colors.textSecondary};
    border-radius: 6px;
    line-height: 40px;
    outline: none;
    font-size: 14px;
    text-align: center;
    &:focus{
        border: 1px solid ${colors.primary};
    }

    @media (${breakpoints.tabletSmall}) {
        max-width: 400px;
        display: flex;
        justify-content: center;
        padding: 0;
    }

    @media (${breakpoints.desktop}) {
        font-size: 16px;
    }
`