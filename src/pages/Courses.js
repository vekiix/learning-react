import React from "react";
import Header from "../components/Header/Header.js";
import Main from "../components/Main/Main.js";
import Section from "../components/Section/Section.js";
import Grid from "../components/Grid/Grid.js";
import CourseCard from "../components/CourseCard/CourseCard.js";

import CoursePages from "../assets/contents/CoursePages.js";

const Courses = () => {
    return (
        <>
            <Header modifiers={['secondary']}/>
            <Main>
                <Section
                    isHeadingVisible={true}
                    title={"All Courses"}
                >
                    <Grid>
                        {CoursePages.map((course) => {
                        return (
                            <CourseCard
                            key={course.title}
                            imgSrc={course.imgSrc}
                            imgAlt={course.imgAlt}
                            title={course.title}
                            subtitle={course.subtitle} 
                            reference={"/course"}
                            />
                        )})}
                    </Grid>
                </Section>
            </Main>
        </>
    )

}

export default Courses;