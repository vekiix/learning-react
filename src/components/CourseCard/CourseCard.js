import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Course, Figure, Img, Title, Subtitle } from './CourseCardStyle';

const CourseCard = ({
    imgSrc,
    imgAlt,
    title,
    subtitle,
    reference,
}) => {
    const navigate = useNavigate()

    const handleClick = () => {
        if(reference){
            navigate(reference)   
        }
    }

    return (
        <Course onClick={handleClick}>
            <Figure >
                <Img src={imgSrc} alt={imgAlt} />   
            </Figure>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
        </Course>
    );
    
}

export default CourseCard;