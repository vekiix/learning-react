import styled from "styled-components";
import { colors } from "../../lib/style/theme";

export const Button = styled.button`
    border: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 220px;
    height: 48px;
    font-size: 16px;
    background-color: ${colors.bgPrimary};
    color: ${colors.primary};
    border-radius: 30px;
    font-weight: 500pt;
    text-transform: uppercase;

    &:hover{
        transition: all 0.3s ease-in-out;
        filter: drop-shadow(0 3px 3px (${colors.primary}));
    }

    ${props => props.isNav && `
        width: 150px;
        &:hover {
           transition: all 0.3s ease-in-out;
        }
    `}
    ${props => props.isSecondary && `
        background: ${colors.primary};
        color: ${colors.secondary};
    `}

    ${props => props.isOutline && `
        border: 1px solid ${colors.primary};
    `}
    
    ${props => props.isHeading && `
        width: 200px;
    `}
`;