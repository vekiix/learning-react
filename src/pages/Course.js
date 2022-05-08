import React from "react";
import Header from "../components/Header/Header.js";
import Main from "../components/Main/Main.js";
import Section from "../components/Section/Section.js";
import CourseSection from "../components/Course/CourseSection.js";



const Course = () => {
    return (
        <>
            <Header modifiers={["secondary"]}/>
            <Main>
                <Section 
                    modifiers={["testimonials"]}
                    actionText={"120+ Minutes"}
                    title = {"3. Version Control Systems"}
                    buttonText={"back"}
                    buttonReference={"/courses"}
                >
                    <CourseSection />
                </Section>
            </Main>
        </>
    )

}

export default Course;