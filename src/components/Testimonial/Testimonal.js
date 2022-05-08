import React from 'react';
import './Testimonial.scss';
import {testimonialsText} from '../../assets/contents/Texts'

import TestimonialImg from '../../assets/images/testimonial.jpg';

const Testimonial = () => {
    return (
        <div className="Testimonial">
            <figure className="Testimonial-Figure">
                <img src={TestimonialImg} alt="Testimonialka" className="Testimonial-Img" />
            </figure>
            <div className="Testimonial-Content">
                <p className="Testimonial-Text">
                    <span className="Testimonial-Quotation">"</span>
                        {testimonialsText}
                    <span className="Testimonial-Quotation">"</span>
                </p>
            </div>
        </div>
    );
}

export default Testimonial;