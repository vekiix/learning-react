import React from "react";
import {Formik} from 'formik'
import * as Yup from 'yup'
import Section from "../components/Section/Section.js";
import Button from "../components/Button/Button.js";
import Header from "../components/Header/Header.js";
import {
    Form,
    FormRow,
    Field,
    ErrorMessage
} from '../lib/style/generalStyles.js'

const SignIn = () => {

    return (
        <>
            <Header isSecondary/>
            <Section 
                    isMainSection
                    isCentered
                    title={'Register'}>
                    <Formik 
                        initialValues={{
                            email: '',
                            password: '',
                        }}
                        validationSchema = {Yup.object({
                            email: Yup.string()
                                .required("Email is required"),
                            password: Yup.string()
                            .min(8, "Password must be at least 8 characters long")
                            .required("Password is required"),
                        })}
                        
                        onSubmit={(values,actions) => {
                            setTimeout(() => {
                                const data = {...values}
                                alert(JSON.stringify(data,null,2))
                                actions.setSubmitting(false);
                                actions.resetForm({
                                    email: '',
                                    password: '',
                                })
                            }, 1000);
                        }}>
                        {formik => (
                                <Form>
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
                                        <Button 
                                            isOutline 
                                            isLanding
                                            type="submit"
                                            disabled={formik.isSubmitting}>{formik.isSubmitting ? "Processing..." : "Sign in"}</Button>
                                    </FormRow>
                                </Form>
                        ) }
                    </Formik>
                </Section>
        </>
    )
}

export default SignIn;