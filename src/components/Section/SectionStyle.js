import styled, {css} from 'styled-components';
import { breakpoints, colors } from '../../lib/style/theme';


export const Section = styled.section`
    padding: 60px 24px;
    @media (${breakpoints.desktop}){
        padding: 120px 0;
    }

    ${(props => props.testimonials && `
        background-color: ${colors.bgSecondary}
    `)}
`;

export const SectionInner = styled.div `
        @media (${breakpoints.desktop}){
            width: 960px;
            margin: 0 auto;
        }

        @media (min-width: 1300px){
            width: 1260px;
        }
`

export const ActionText = styled.span`
        display: block;
        color: ${colors.primary};
        font-weight: 500pt;
        margin-bottom: 24px;
`

export const Heading = styled.div`
        margin-bottom: 64px;
        

        @media (min-width: 768px){
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
`
const TitleStyle = css `
        color: ${colors.textPrimary};
        font-size: 26px;
        font-weight: 500pt;
        margin-bottom: 32px;

        @media (min-width: 768px){
            font-size: 32px;
            margin-bottom: 0;
        }

        @media (${breakpoints.desktop}){
            font-size: 36px;
        }
        ${(props) => props.isCentered && `
            text-align:center;
            width:100%;
    `}
`

export const TitleH2 = styled.h2 `
    ${TitleStyle}
`
export const TitleH1 = styled.h1`
    ${TitleStyle}
`
