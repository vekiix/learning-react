import styled, {css} from 'styled-components'
import {Form as formikForm, Field as formikField, ErrorMessage as formikErrorMessage} from 'formik'
import {breakpoints, colors, fonts} from './theme'


export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    row-gap: 48px;

    @media (${breakpoints.tabletSmall}){
        grid-template-columns: repeat(2, 1fr);
        column-gap: 32px;
    }

    @media (${breakpoints.desktop}){
        grid-template-columns: repeat(3, 1fr);
        column-gap: 48px;
    }

    @media (${breakpoints.desktopLarge}){
        grid-template-columns: repeat(4, 1fr);
    }
`

export const Form = styled(formikForm)`
    width: 100%;
    @media (${breakpoints.tabletSmall}) {
        width: 400px;
        margin: 0 auto;
    }  
`

export const FormRow = styled.div`
    margin-bottom: 32px;
    align-self: center;
    width: 100%;
    &:last-child{
        margin-bottom: 0px;
    }
`

const FieldStyle = css`
    border: 1px solid ${colors.textSecondary};
    border-radius: 6px;
    width: 100%;
    line-height: 50px;
    height: 50px;
    padding: 0 12px;
    outline: none;
    font-size: 14px;
    font-family: ${fonts.primary};

    &:focus {
        border-color: ${colors.textPrimary};
    }

    @media (${breakpoints.desktop}) {
        font-size: 16px;
    }
`;

export const Field = styled(formikField)`
    ${FieldStyle}
`

export const Select = styled.select`
    ${FieldStyle}
`

export const Option = styled.option`

`

export const ErrorMessage = styled(formikErrorMessage)`
    font-size: 14px;
    color: ${colors.primary};
    padding-top: 8px;
`