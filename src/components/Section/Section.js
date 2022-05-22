import React from 'react';
import Button from '../Button/Button';
import { ActionText, Heading, Section as SectionDiv, SectionInner, TitleH1, TitleH2, } from './SectionStyle';

const Section = ({
    testimonials,
    actionText,
    title,
    buttonText,
    buttonReference,
    buttonCallback,
    isHeadingVisible = true,
    isMainSection = false,
    isCentered = false,
    children
    }) => {
    return (
        <SectionDiv testimonials={testimonials}>
            <SectionInner>
                {actionText && <ActionText>{actionText}</ActionText>}
                {isHeadingVisible && <Heading>
                    {title && (isMainSection ? <TitleH1 isCentered={isCentered}>{title}</TitleH1> : <TitleH2 isCentered={isCentered}>{title}</TitleH2>)}
                    {buttonText && <Button isHeading callback={buttonCallback} isOutline reference={buttonReference}>{buttonText}</Button>}
                </Heading>}
                {children}
            </SectionInner>
        </SectionDiv>
    );
}

export default Section;