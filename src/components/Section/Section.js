import React from 'react';
import Button from '../Button/Button';
import { ActionText, Heading, Section as SectionDiv, SectionInner, Title } from './SectionStyle';

const Section = ({
    testimonials,
    actionText,
    title,
    buttonText,
    buttonReference,
    isHeadingVisible = true,
    children }) => {
    return (
        <SectionDiv testimonials={testimonials}>
            <SectionInner>
                {actionText && <ActionText>{actionText}</ActionText>}
                {isHeadingVisible && <Heading>
                    {title && <Title>{title}</Title>}
                    {buttonText && <Button isHeading isOutline reference={buttonReference}>{buttonText}</Button>}
                </Heading>}
                {children}
            </SectionInner>
        </SectionDiv>
    );
}

export default Section;