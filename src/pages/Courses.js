import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header.js";
import Main from "../components/Main/Main.js";
import Section from "../components/Section/Section.js";
import {Grid} from '../lib/style/generalStyles'
import LoaderComponent from "../components/LoaderComponent/LoaderComponent.js";
import CourseCard from "../components/CourseCard/CourseCard.js";
import SearchBar from "../components/SearchBar/SearchBar.js";
import courseMock from "../lib/mock/courses.js";

const Courses = () => {
    const [courses, setCourses] = useState(null)
    const [loaded, setLoaded] = useState(false)
    
    useEffect(()=>{
        setTimeout(()=>{
            setCourses(courseMock)
            setLoaded(true);
        },1000)
    },[])

    const handleSearch = (inputText) => {
        setCourses(() => courseMock.filter((course) => course.title.toLowerCase().includes(inputText.toLowerCase())))
    }

    return (
        <>
            <Header isSecondary />
            <Main>
                <Section
                    isHeadingVisible={true}
                    title={"All Courses"}
                >
                    <SearchBar callback={handleSearch} placeholder={"Search Courses"} disabled={!loaded}/>
                    {!courses && <LoaderComponent />}
                    {courses && (<Grid>
                        {courses.map((course) => {
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
                    </Grid>)}
                </Section>
            </Main>
        </>
    )

}

export default Courses;