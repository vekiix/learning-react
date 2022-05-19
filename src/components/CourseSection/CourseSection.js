import React from 'react';
import {Course, Figure, Image, Content, Text} from './CourseSectionStyle'

const CourseSection = ({aboutCourseText, imgSrc, imgAlt}) => {
    return (
        <Course>
            <Figure>
                <Image src={imgSrc} alt={imgAlt} className="CourseSection-Img" />
            </Figure>
            <Content>
                <Text>
                    {aboutCourseText}
                </Text>
            </Content>
        </Course>
    );
}

export default CourseSection;