import './CourseSection.scss'
import React from 'react';
import { aboutCourseText } from '../../assets/contents/Texts.js';

import Image from '../../assets/images/lecture-3.jpg';

const CourseSection = () => {
    return (
        <div className="CourseSection">
            <figure className="CourseSection-Figure">
                <img src={Image} alt="Version Control Systems" className="CourseSection-Img" />
            </figure>
            <div className="CourseSection-Content">
                <p className="CourseSection-Text">
                    {aboutCourseText}
                </p>
            </div>
        </div>
    );
}

export default CourseSection;