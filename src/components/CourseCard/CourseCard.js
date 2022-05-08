import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CourseCard.scss';

const CourseCard = ({
    imgSrc,
    imgAlt,
    title,
    subtitle,
    reference
}) => {
    const navigate = useNavigate()

    const handleClick = async () => {
        if(reference){
            navigate(reference)   
        }
    }

    return (
        <div className="Course" onClick={handleClick}>
            <figure className="Course-Figure">
                <img src={imgSrc} alt={imgAlt} className="Course-Img" />   
            </figure>
            <h3 className="Course-Title">{title}</h3>
            <p className="Course-Subtitle">{subtitle}</p>
        </div>
    );
    
}

export default CourseCard;