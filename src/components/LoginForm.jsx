import React from "react";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import {TextField} from "@mui/material";
import {Button} from "@material-ui/core";

const loginSchema = Yup.object().shape({
    password: Yup.string()
        .min(8, "Too Short!")
        .max(20, "Too Long!")
        .required("Required"),
    email: Yup.string().email("Invalid email").required("Required")
});

const LoginForm = () => {
    const handleSubmit = (values, {setSubmitting}) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 400);
    };


    return (
        <>
            <h1>Login</h1>
            <Formik
                initialValues={{email: "", password: ""}}
                validationSchema={loginSchema}
                onSubmit={handleSubmit}
            >
                {({isSubmitting}) => {
                    return (
                        <Form>
                            <label>
                                Email: <Field type="email" name="email"/>
                                <ErrorMessage name="email" component="div"/>
                            </label>
                            <label>
                                Password:
                                <Field type="password" name="password"/>
                                <ErrorMessage name="password" component="div"/>
                            </label>
                            <Button type="submit" disabled={isSubmitting}>
                                Submit
                            </Button>
                        </Form>
                    );
                }}
            </Formik>
        </>
    );

}

export default LoginForm;