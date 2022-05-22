import {React, useState, useEffect} from "react";
import Header from "../components/Header/Header.js";
import {Main} from "../lib/style/generalStyles";
import Landing from "../components/Landing/Landing.js";
import Section from "../components/Section/Section.js";
import CourseCard from "../components/CourseCard/CourseCard.js";
import Testimonial from "../components/Testimonial/Testimonal.js";
import LoaderComponent from "../components/LoaderComponent/LoaderComponent.js";
import { Grid } from "../lib/style/generalStyles.js";
import {sectionActionText,sectionTitle} from "../assets/contents/Texts.js"
import coursesMock from "../lib/mock/courses.js";

const Home = () => {
    const [courses, setCourses] = useState(null)
    useEffect(() => {
        setTimeout(()=>{
            setCourses(coursesMock);
        },1000)
    },[])


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
                {!courses && <LoaderComponent />}
                {courses && <Grid>
                    {courses.map((course, index) => index <= 3 &&
                        <CourseCard 
                        key={course.id}
                        courseId = {course.id}
                        imgSrc={course.imgSrc}
                        imgAlt={course.imgAlt}
                        title={course.title}
                        subtitle={course.subtitle} 
                        reference={"/course/" + course.id}
                        />
                    )}
                    </Grid>}
                </Section>
                <Section testimonials>
                    <Testimonial />
                </Section>
            </Main> 
        </>
    )

}

export default Home;