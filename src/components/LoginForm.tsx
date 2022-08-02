import React from "react";
import {Formik, Form, Field, ErrorMessage} from "formik";
import {Button} from "@material-ui/core";
import loginSchema from "../utils/LoginForm.shema";

type ILoginUser = {
    email: string,
    password: string
}

const LoginForm: React.FC = () => {
    const initialValues: ILoginUser = {email: "", password: ""}
    return (
        <>
            <h1>Login</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={loginSchema}
                onSubmit={(values, actions) => {
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
