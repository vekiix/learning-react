import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header.js";
import Main from "../components/Main/Main.js";
import Section from "../components/Section/Section.js";
import CourseSection from "../components/CourseSection/CourseSection.js";
import { useParams } from "react-router-dom";
import coursesMock from "../lib/mock/courses.js";


const Course = () => {
    const {id} = useParams();
    const [courses, setCourses] = useState(null)
    const [course, setCourse] = useState(null)

    useEffect(() => {
        setCourses(coursesMock)
    },[])

    useEffect(()=>{
        courses && setCourse(...courses.filter(course => course.id === parseInt(id)))
    },[courses, id])

    return (
        <>
            <Header isSecondary/>
            {course && (
                <Main>
                <Section 
                    modifiers={["testimonials"]}
                    actionText={course.subtitle}
                    title = {course.title}
                    buttonText={"back"}
                    buttonReference={"/courses"}
                    
                >
                    <CourseSection 
                    imgSrc={course.imgSrc} 
                    aboutCourseText = {course.text}
                    imgAlt = {course.imgAlt}
                    />
                </Section>
            </Main>
            )}
        </>
    )

}

export default Course;