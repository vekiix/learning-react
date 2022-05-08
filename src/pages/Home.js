import React from "react";
import Header from "../components/Header/Header.js";
import Main from "../components/Main/Main.js";
import Landing from "../components/Landing/Landing.js";
import Section from "../components/Section/Section.js";
import Grid from "../components/Grid/Grid.js";
import CourseCard from "../components/CourseCard/CourseCard.js";
import Testimonial from "../components/Testimonial/Testimonal.js";

import {sectionActionText,sectionTitle} from "../assets/contents/Texts.js"
import CoursePages from "../assets/contents/CoursePages.js";

const Home = () => {
    return (
        <>
            <Header />
            <Main>
                <section>
                    <Landing />
                </section>
                <Section
                actionText={sectionActionText}
                title={sectionTitle}
                buttonText={"More Courses"}
                buttonReference = {"/courses"}
                >
                <Grid>
                {
                    CoursePages.slice(0,4).map(course => {
                        return (
                            <CourseCard
                            key={course.title}
                            imgSrc={course.imgSrc}
                            imgAlt={course.imgAlt}
                            title={course.title}
                            subtitle={course.subtitle} 
                            reference="/course"
                            />
                        )})
                }
                </Grid>
                </Section>
                <Section modifiers={['testimonials']}>
                    <Testimonial />
                </Section>
            </Main> 
        </>
    )

}

export default Home;