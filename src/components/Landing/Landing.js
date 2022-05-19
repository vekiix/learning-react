import React from "react";
import {Landing as LandingDiv, Figure, Img, ContentInner, Title, Subtitle, Overlay, OverlayPrimary, OverlaySecondary, Content} from './LandingStyle'
import {landingTitle, landingSubtitle} from '../../assets/contents/Texts.js'
import LandingImg from '../../assets/images/landing.jpg'
import Button from '../Button//Button.js'

const Landing = () => {
    return (
        <LandingDiv>
            <Figure >
                <Img src={LandingImg} alt="Landing image" />
            </Figure>
            <Overlay>
                <OverlayPrimary></OverlayPrimary>
                <OverlaySecondary></OverlaySecondary>
            </Overlay>
            <Content>
                <ContentInner>
                    <Title>{landingTitle}</Title>
                    <Subtitle>{landingSubtitle}</Subtitle>
                    <Button  isLanding reference="/courses">Explore courses</Button>
                </ContentInner>
            </Content>
        </LandingDiv>
    )
}

export default Landing;