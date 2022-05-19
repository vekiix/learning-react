import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors, breakpoints } from "../../lib/style/theme";

export const Course = styled.div`

    &:hover {
        figure{
            box-shadow: 0 3px 6px ${colors.boxShadowPrimary}, 0 3px 6px ${colors.boxShadowSecondary};
        }

        img {
            transform: scale(1.05);
        }

        h3{
            color: ${colors.primary}
        }
    }
`

export const Figure = styled.figure`
        width: 100%;
        height: 245px;
        border-radius: 16px;
        overflow: hidden;
        margin-bottom: 16px;
        transition: all 0.3s;

        @media (${breakpoints.mobileLarge}){
            height: 275px;
        }

        @media (${breakpoints.tabletSmall}){
            height: 200px;
        }

        @media (${breakpoints.tablet}){
            height: 275px;
        }
        
        @media (${breakpoints.desktop}){
            height: 230px;
        }
        
        @media (${breakpoints.desktopLarge}){
            height: 255px;
        }
`

export const Img = styled.img`
    width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 0.3s ease-out;
`

export const Title = styled.h3`
    font-size: 20px;
        font-weight: 500;
        color: ${colors.colorTextPrimary};
        text-align: center;
        margin-bottom: 8px;
        transition: color 0.3s ease-out;
`

export const Subtitle = styled.p`
    font-size: 16px;
        font-weight: 300;
        color: ${colors.colorTextSecondary};
        text-align: center;
`