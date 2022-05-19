import React from 'react';
import {Testimonial as TestimonialDiv, Figure, Image, Content, Text, Quotation} from './TestimonialStyle'
import {testimonialsText} from '../../assets/contents/Texts'

import TestimonialImg from '../../assets/images/testimonial.jpg';

const Testimonial = () => {
    return (
        <TestimonialDiv>
            <Figure>
                <Image src={TestimonialImg} alt="Testimonialka" />
            </Figure>
            <Content>
                <Text>
                    <Quotation>"</Quotation>
                        {testimonialsText}
                    <Quotation>"</Quotation>
                </Text>
            </Content>
        </TestimonialDiv>
    );
}

export default Testimonial;