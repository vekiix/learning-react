import styled from "styled-components";
import { colors, breakpoints } from "../../lib/style/theme";

export const Course = styled.div`
    display: grid;
        grid-template-columns:  1fr;

        @media (${breakpoints.tablet}){
            grid-template-columns: 2fr 3fr;
            column-gap: 60px;
        }
`

export const Figure = styled.figure`
        border-radius: 30px;
        width: 100%;
        height: 400px;
        overflow: hidden;

        @media (${breakpoints.tablet}){
            border-radius: 8%;
        }
`

export const Image = styled.img`
        width: 100%;
        height: 100%;
        object-fit: cover;
`

export const Content = styled.div`
        width: 100%;
        padding-top: 24px;

        @media (${breakpoints.tablet}){
            padding-top: 0;
        }
`

export const Text = styled.p`
        font-size: 18px;
        line-height: 180%;
        color: ${colors.textSecondary};
`