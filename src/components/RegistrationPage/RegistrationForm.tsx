import React from "react";
import {useFormik} from "formik";
import {TextField} from "@mui/material";
import {Button} from "@material-ui/core";
import registrationSchema from "../../utils/RegistrationForm.shema";
import {AuthAPI} from "../../api/Auth/AuthAPI";
import {useNavigate} from "react-router";
import {useSnackbar} from "notistack";
import {findmoviePatch} from "../../utils/variables";

const StyleRegistrationForm = {
    RegBlock: {
        width: 300,
        height: 450,
        background: "gray",
        marginTop: 50,
        marginLeft: "auto",
        marginRight: "auto",

    },
    formBlock: {
        height: 400,
        margin: "auto",
        display: "flex",
        flexDirection: "column" as "column",
        alignItems: "center" as "center",
        position: "relative" as "relative"
    },
    emailInput: {
        position: "absolute" as "absolute",
        top: 10

    },
    usernameInput: {
        position: "absolute" as "absolute",
        top: 80

    },
    passInput: {
        position: "absolute" as "absolute",
        top: 150

    },
    passInputConfirm: {
        position: "absolute" as "absolute",
        top: 210

    },
    btnSubmit: {
        position: "absolute" as "absolute",
        top: 310

    },
    backLogin:{
        position: "absolute" as "absolute",
        top: 350
    },
    h1: {
        margin: "auto",
        textAlign: "center" as "center"
    }
}

const RegistrationForm: React.FC = () => {
    const navigate = useNavigate()
    const {enqueueSnackbar} = useSnackbar()
    const formik = useFormik(
        {
            initialValues: {email: "", username: "", password: "", confirmPassword: ""},
            validationSchema: registrationSchema,
            onSubmit: (values, actions) => {
                AuthAPI.registration(values)
                    .then(() => {navigate(findmoviePatch)})
                    .catch((e) => {
                    const keys = Object.keys(e.response.data)
                    enqueueSnackbar(e.response.data[keys[0]])});
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
                    <div style={StyleRegistrationForm.usernameInput}>
                        <TextField
                            id="username"
                            type="username"
                            name="username"
                            label="User Name"
                            variant="standard"
                            value={formik.values.username}
                            onChange={formik.handleChange}
                            error={formik.touched.username && Boolean(formik.errors.username)}
                            helperText={formik.touched.username && formik.errors.username}/>
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
                    <div style={StyleRegistrationForm.passInputConfirm}>
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
                    <div style={StyleRegistrationForm.backLogin}>
                        <p onClick={() => navigate("/login")}>Login</p>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default RegistrationForm