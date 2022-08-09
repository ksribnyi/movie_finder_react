import React from "react";
import {useFormik} from "formik";
import {TextField} from "@mui/material";
import {Button} from "@material-ui/core";
import registrationSchema from "../../utils/RegistrationForm.shema";


const StyleRegistrationForm = {
    RegBlock: {
        width: 300,
        height: 350,
        background: "gray",
        marginTop: 50,
        marginLeft: "auto",
        marginRight: "auto"

    },
    formBlock: {
        height: 280,
        margin: "auto",
        display: "flex",
        flexDirection: "column" as "column",
        alignItems: "center" as "center",
    },
    emailInput: {
        marginTop: 20,

    },
    passInput: {
        marginTop: 20
    },
    btnSubmit: {
        marginTop: 40
    },
    h1: {
        margin: "auto",
        textAlign: "center" as "center"
    }

}

const RegistrationForm: React.FC = () => {
    const formik = useFormik(
        {
            initialValues: {email: "", password: "", confirmPassword: ""},
            validationSchema: registrationSchema,
            onSubmit: (values, actions) => {
                alert(JSON.stringify(values, null, 2));
                actions.setSubmitting(false);
            }
        }
    )
    return (
        <div style={StyleRegistrationForm.RegBlock}>
            <h1 style={StyleRegistrationForm.h1}>Registration</h1>
            <form onSubmit={formik.handleSubmit}>
                <div style={StyleRegistrationForm.formBlock}>
                    <div style={StyleRegistrationForm.emailInput}>
                        <TextField
                            id="email"
                            type="email"
                            name="email"
                            label="Email"
                            variant="standard"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}/>
                    </div>
                    <div style={StyleRegistrationForm.passInput}>
                        <TextField
                            id="password"
                            name="password"
                            label="Password"
                            type="password"
                            variant="standard"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                        />
                    </div>
                    <div style={StyleRegistrationForm.passInput}>
                        <TextField
                            id="confirmPassword"
                            name="confirmPassword"
                            label="Confirm password"
                            type="password"
                            variant="standard"
                            value={formik.values.confirmPassword}
                            onChange={formik.handleChange}
                            error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                            helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                        />
                    </div>
                    <div style={StyleRegistrationForm.btnSubmit}>
                        <Button variant="contained" type="submit">
                            Submit
                        </Button>
                    </div>
                </div>

            </form>

        </div>
    );

}

export default RegistrationForm