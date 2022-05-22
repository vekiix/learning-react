import React from "react";
import Header from "../components/Header/Header.js";
import Section from "../components/Section/Section.js";
import {Formik} from 'formik'
import * as Yup from 'yup'
import {
    Form,
    FormRow,
    Field,
    Select,
    Option,
    ErrorMessage
} from '../lib/style/generalStyles.js'
import Button from "../components/Button/Button.js";


const Register = () => {

    return (
        <>
            <Header isSecondary ={true}/>
                <Section 
                    isMainSection
                    isCentered
                    title={'Register'}>
                    <Formik 
                        initialValues={{
                            firstName: '',
                            lastName: '',
                            email: '',
                            password: '',
                            passwordConfirmed: '',
                            githubUsername:'',
                            zepelinUsername: '',
                            activeFacultyYear: '',
                            isAdmin: false
                        }}
                        validationSchema = {Yup.object({
                            firstName: Yup.string()
                                .required("First name is required"),
                            lastName: Yup.string()
                                .required("Last name is required"),
                            email: Yup.string()
                                .required("Email is required"),
                            password: Yup.string()
                            .min(8, "Password must be at least 8 characters long")
                            .required("Password is required"),
                            passwordConfirmed: Yup.string()
                                .test(
                                    'password-match',
                                    'Passwords must match',
                                    function(value){
                                        return this.parent.password === value
                                    }
                                ),
                            githubUsername: Yup.string()
                                    .required("Github username is required"),
                            zepelinUsername: Yup.string()
                                    .required("Zepelin username is required"),
                            activeFacultyYear: Yup.string()
                                    .required("Active faculty year is required")
                        })}
                        
                        onSubmit={(values,actions) => {
                            setTimeout(() => {
                                const data = {
                                    ...values,
                                    activeFacultyYear: Number(values.activeFacultyYear) === 0 ? null : Number(values.activeFacultyYear)
                                }
                                alert(JSON.stringify(data,null,2))
                                actions.setSubmitting(false);
                                actions.resetForm({
                                    firstName: '',
                                    lastName: '',
                                    email: '',
                                    password: '',
                                    passwordConfirmed: '',
                                    githubUsername:'',
                                    zepelinUsername: '',
                                    activeFacultyYear: '',
                                })
                            }, 1000);
                        }}>
                        {formik => (
                                <Form>
                                    <FormRow>
                                        <Field 
                                            type="text"
                                            name="firstName"
                                            placeholder="First name..."
                                            disabled={formik.isSubmitting} />
                                        <ErrorMessage component="div" name="firstName" />
                                    </FormRow>
                                     <FormRow>
                                        <Field 
                                            type="text"
                                            name="lastName"
                                            placeholder="Last name..."
                                            disabled={formik.isSubmitting} />
                                        <ErrorMessage component="div" name="lastName" />
                                    </FormRow>                               
                                    <FormRow>                                     
                                        <Field 
                                            type="email"
                                            name="email"
                                            placeholder="Email..."
                                            disabled={formik.isSubmitting} />
                                        <ErrorMessage component="div" name="email" />
                                    </FormRow>
                                    <FormRow>
                                        <Field 
                                            type="password"
                                            name="password"
                                            placeholder="Password ..."
                                            disabled={formik.isSubmitting} />
                                        <ErrorMessage component="div" name="password" />
                                    </FormRow>
                                    <FormRow>
                                        <Field 
                                            type="password"
                                            name="passwordConfirmed"
                                            placeholder="Confirmed password..."
                                            disabled={formik.isSubmitting} />
                                        <ErrorMessage component="div" name="passwordConfirmed" />
                                    </FormRow>
                                    <FormRow>
                                        <Field 
                                            type="text"
                                            name="githubUsername"
                                            placeholder="Github username..."
                                            disabled={formik.isSubmitting} />
                                        <ErrorMessage component="div" name="githubUsername" />
                                    </FormRow>
                                    <FormRow>
                                        <Field 
                                            type="text"
                                            name="zepelinUsername"
                                            placeholder="Zepelin username..."
                                            disabled={formik.isSubmitting} />
                                        <ErrorMessage component="div" name="zepelinUsername" />
                                    </FormRow>
                                    <FormRow>
                                        <Select
                                            id="activeFacultyYear"
                                            {...formik.getFieldProps('activeFacultyYear')}>
                                            <Option value="" disabled hidden> Choose an active faculty year</Option>
                                            <Option value="" disabled hidden>Choose an Active faculty year</Option>
                                            <Option value='0'>Not a student</Option>
                                            <Option value='1'>1st faculty year</Option>
                                            <Option value='2'>2nd faculty year</Option>
                                            <Option value='3'>3rd faculty year</Option>
                                            <Option value='4'>4th faculty year</Option>
                                            <Option value='5'>5th faculty year</Option> 
                                        </Select>
                                        <ErrorMessage component="div" name="firstName" />
                                    </FormRow>  
                                    <FormRow>
                                        <Button 
                                            isOutline 
                                            isLanding
                                            type="submit"
                                            disabled={formik.isSubmitting}>{formik.isSubmitting ? "Processing..." : "Sign up"}</Button>
                                    </FormRow>
                                </Form>
                        ) }
                    </Formik>
                </Section>
            
        </>
    )

}

export default Register;