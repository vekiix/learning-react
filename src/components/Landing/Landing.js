import React from "react";
import './Landing.scss';

import {landingTitle, landingSubtitle} from '../../assets/contents/Texts.js'
import LandingImg from '../../assets/images/landing.jpg'
import Button from '../Button//Button.js'

const Landing = () => {
    return (
        <div className="Landing">
            <div className="Landing-Figure">
                <img src={LandingImg} alt="Landing" className="Landing-Img" />
            </div>
            <div className="Landing-Overlay">
                <div className="Landing-OverlayPrimary"></div>
                <div className="Landing-OverlaySecondary"></div>
            </div>
            <div className="Landing-Content">
                <div className="Landing-ContentInner">
                    <h1 className="Landing-Title">{landingTitle}</h1>
                    <p className="Landing-Subtitle">{landingSubtitle}</p>
                    <Button modifiers={['landing']} reference="/courses">Explore courses</Button>
                </div>
            </div>
        </div>
    )
}

export default Landing;