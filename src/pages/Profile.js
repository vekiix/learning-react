import React, { useState } from "react";
import Header from "../components/Header/Header.js";
import Section from "../components/Section/Section.js";
import Button from "../components/Button/Button.js";
import {Formik} from 'formik'
import PasswordResetWidget from "../components/PasswordResetWidget/PasswordResetWidget.js";
import * as Yup from 'yup'
import {
    Form,
    FormRow,
    Field,
    Select,
    Option,
    ErrorMessage,
    Grid
} from '../lib/style/generalStyles.js'


const Profile = () => {
    const [editMode, setEditMode] = useState(false);
    const [user, setUser] = useState({
        firstName: 'Vedran',
        lastName: 'Vidakovic',
        email: 'vvidakovi@foi.hr',
        password: 'password1',
        passwordConfirmed: 'password1',
        githubUsername:'vekiix',
        zepelinUsername: 'vekiix',
        activeFacultyYear: '4',
        isAdmin: false
    })


    const toggleEditMode = () => {
        setEditMode(editMode ? false : true)
    }


    return (
        <>
            <Header isSecondary ={true}/>
                <Section 
                    buttonText={editMode ? "cancel" : "edit"}
                    isMainSection
                    buttonCallback={toggleEditMode}
                    title={'My Profile'}>
                    <Grid>
                    <Formik 
                        enableReinitialize
                        initialValues={{
                            firstName: user.firstName,
                            lastName: user.lastName,
                            email: user.email,
                            githubUsername:user.githubUsername,
                            zepelinUsername: user.zepelinUsername,
                            activeFacultyYear: user.activeFacultyYear,
                        }}
                        validationSchema = {Yup.object({
                            firstName: Yup.string()
                                .required("First name is required"),
                            lastName: Yup.string()
                                .required("Last name is required"),
                            email: Yup.string()
                                .required("Email is required"),
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
                                setUser({
                                    firstName: data.firstName,
                                    lastName:data.lastName,
                                    email:data.email,
                                    githubUsername: data.githubUsername,
                                    zepelinUsername: data.zepelinUsername,
                                    activeFacultyYear: data.activeFacultyYear,
                                    isAdmin: data.activeFacultyYear
                                })

                                alert("User information successfully updated.")
                                actions.setSubmitting(false);
                                actions.resetForm({
                                    firstName: user.firstName,
                                    lastName: user.lastName,
                                    email: user.email,
                                    githubUsername:user.githubUsername,
                                    zepelinUsername: user.zepelinUsername,
                                    activeFacultyYear: user.activeFacultyYear,
                                })
                            }, 1000);
                        }}>
                        {formik => (
                                <Form>
                                    <FormRow>
                                        First Name:
                                        <Field 
                                            type="text"
                                            name="firstName"
                                            placeholder="First name..."
                                            disabled={!editMode} />
                                        <ErrorMessage component="div" name="firstName" />
                                    </FormRow>
                                     <FormRow>
                                        Last Name:
                                        <Field 
                                            type="text"
                                            name="lastName"
                                            placeholder="Last name..."
                                            disabled={formik.isSubmitting || !editMode} />
                                        <ErrorMessage component="div" name="lastName" />
                                    </FormRow>                               
                                    <FormRow>  
                                        Email:                                   
                                        <Field 
                                            type="email"
                                            name="email"
                                            placeholder="Email..."
                                            disabled={formik.isSubmitting || !editMode} />
                                        <ErrorMessage component="div" name="email" />
                                    </FormRow>

                                    <FormRow>
                                        GitHub Username:
                                        <Field 
                                            type="text"
                                            name="githubUsername"
                                            placeholder="Github username..."
                                            disabled={formik.isSubmitting || !editMode} />
                                        <ErrorMessage component="div" name="githubUsername" />
                                    </FormRow>
                                    <FormRow>
                                        Zepelin Username:
                                        <Field 
                                            type="text"
                                            name="zepelinUsername"
                                            placeholder="Zepelin username..."
                                            disabled={formik.isSubmitting || !editMode} />
                                        <ErrorMessage component="div" name="zepelinUsername" />
                                    </FormRow>
                                    <FormRow>
                                        Active faculty year:
                                        <Select
                                            id="activeFacultyYear"
                                            disabled={formik.isSubmitting || !editMode}
                                            {...formik.getFieldProps('activeFacultyYear')}>
                                            <Option value="" disabled hidden> Choose an active faculty year</Option>
                                            <Option value='0'>Not a student</Option>
                                            <Option value='1'>1st faculty year</Option>
                                            <Option value='2'>2nd faculty year</Option>
                                            <Option value='3'>3rd faculty year</Option>
                                            <Option value='4'>4th faculty year</Option>
                                            <Option value='5'>5th faculty year</Option> 
                                        </Select>
                                        <ErrorMessage component="div" name="firstName" />
                                    </FormRow> 
                                    {editMode && (
                                        <FormRow>
                                            <Button 
                                                isOutline 
                                                isLanding
                                                type="submit"
                                                disabled={formik.isSubmitting}>{formik.isSubmitting || !editMode ? "Processing..." : "Update"}</Button>
                                        </FormRow> )}
                                </Form>
                                ) }
                            </Formik>
                            <Formik
                                initialValues={{
                                    oldPassword: '',
                                    password: '',
                                    passwordConfirmed: '',
                                }}
                                validationSchema = {Yup.object({
                                    oldPassword: Yup.string()
                                        .test(
                                            'password-match',
                                            'Old password is required',
                                            function(value){
                                                return user.password === value
                                            }
                                        ),
                                    password: Yup.string()
                                    .min(8, "Password must be at least 8 characters long")
                                    .required("New password is required"),
                                    passwordConfirmed: Yup.string()
                                        .test(
                                            'password-match',
                                            'Passwords must match',
                                            function(value){
                                                return this.parent.password === value
                                            }
                                        ),
                                })}
                                onSubmit={(values,actions) => {
                                    setTimeout(() => {
                                        const data = {
                                            ...values,
                                        }
                                        setUser({
                                            firstName: user.firstName,
                                            lastName:user.lastName,
                                            email:user.email,
                                            password: data.password,
                                            passwordConfirmed: data.passwordConfirmed,
                                            githubUsername: user.githubUsername,
                                            zepelinUsername: user.zepelinUsername,
                                            activeFacultyYear: user.activeFacultyYear,
                                            isAdmin: user.activeFacultyYear
                                        })
                                        alert("Password successfully changed.")
                                        actions.setSubmitting(false);
                                        actions.resetForm({
                                            oldPassword: '',
                                            password: '',
                                            passwordConfirmed: ''
                                        })
                                    }, 1000);
                                }}>
                                {formik => (
                                <PasswordResetWidget isActive={editMode}>
                                    <Form>
                                        <FormRow>
                                            <Field 
                                                type="password"
                                                name="oldPassword"
                                                placeholder="Old password ..."
                                                disabled={formik.isSubmitting || !editMode} />
                                            <ErrorMessage component="div" name="oldPassword" />
                                        </FormRow>
                                        <FormRow>
                                            <Field 
                                                type="password"
                                                name="password"
                                                placeholder="Password ..."
                                                disabled={formik.isSubmitting || !editMode} />
                                            <ErrorMessage component="div" name="password" />
                                        </FormRow>
                                        <FormRow>
                                            <Field 
                                                type="password"
                                                name="passwordConfirmed"
                                                placeholder="Confirmed password..."
                                                disabled={formik.isSubmitting || !editMode} />
                                            <ErrorMessage component="div" name="passwordConfirmed" />
                                        </FormRow>
                                        {editMode && (
                                        <FormRow>
                                            <Button 
                                                isOutline 
                                                isLanding
                                                type="submit"
                                                disabled={formik.isSubmitting}>{formik.isSubmitting || !editMode ? "Processing..." : "Update password"}</Button>
                                        </FormRow> )}
                                    </Form>
                                </PasswordResetWidget>
                                )}
                        </Formik>
                    </Grid>
                </Section>
            
        </>
    )

}

export default Profile;