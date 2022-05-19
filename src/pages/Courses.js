import React from "react";
import Header from "../components/Header/Header.js";
import Main from "../components/Main/Main.js";
import Section from "../components/Section/Section.js";
import {Grid} from '../lib/style/generalStyles'
import CourseCard from "../components/CourseCard/CourseCard.js";

import CoursePages from "../lib/mock/courses.js";

const Courses = () => {
    return (
        <>
            <Header isSecondary />
            <Main>
                <Section
                    isHeadingVisible={true}
                    title={"All Courses"}
                >
                    <Grid>
                        {CoursePages.map((course) => {
                        return (
                            <CourseCard
                            key={course.id}
                            imgSrc={course.imgSrc}
                            imgAlt={course.imgAlt}
                            title={course.title}
                            subtitle={course.subtitle} 
                            reference={"/course/" + course.id}
                            />
                        )})}
                    </Grid>
                </Section>
            </Main>
        </>
    )

}

export default Courses;