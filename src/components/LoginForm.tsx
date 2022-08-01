import React from "react";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import {Button} from "@material-ui/core";

type InitValue = {
    email: string,
    password: string
}

const loginSchema = Yup.object().shape({
    password: Yup.string()
        .min(8, "Too Short!")
        .max(20, "Too Long!")
        .required("Required"),
    email: Yup.string().email("Invalid email").required("Required")
});

const LoginForm: React.FC = () => {
    const initialValues: InitValue = {email: '', password: ''}
    return (
        <>
            <h1>Login</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={loginSchema}
                onSubmit={(values, actions) => {
                    console.log({values, actions});
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                }}
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
