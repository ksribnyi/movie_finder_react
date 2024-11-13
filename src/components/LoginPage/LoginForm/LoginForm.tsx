import React from "react";
import {useFormik} from "formik";
import {Button} from "@material-ui/core";
import loginSchema from "../../../utils/LoginForm.shema";
import {TextField} from "@mui/material";
import {useNavigate} from "react-router";
import {useSnackbar} from "notistack";
import {registrationPatch} from "../../../constants/constants";
import {LoginTypes} from "../../../types/login.types";

const StyleLoginForm = {
    formBlock: {
        height: 280,
        margin: "auto",
        display: "flex",
        flexDirection: "column" as "column",
        alignItems: "center" as "center",
        position: "relative" as "relative"
    },
    emailInput: {
        top: 30,
        position: "absolute" as "absolute"
    },
    passInput: {
        top: 110,
        position: "absolute" as "absolute"
    },
    btnSubmit: {
        top: 210,
        position: "absolute" as "absolute"
    },
    backRegistration: {
        top: 250,
        position: "absolute" as "absolute"
    },
    h1: {
        margin: "auto",
        textAlign: "center" as "center"
    }
}

const LoginForm = ({login, setShowLoginModal, bodyInput, requestMovie}: LoginTypes.ILoginForm) => {
    const navigate = useNavigate()
    const {enqueueSnackbar} = useSnackbar()
    const formik = useFormik(
        {
            initialValues: {email: "", password: ""},
            validationSchema: loginSchema,
            onSubmit: async (values) => {
                await login(values.email, values.password, navigate, enqueueSnackbar).then(() => {
                    let value = bodyInput
                    setShowLoginModal(false)
                    window.location.reload()
                    requestMovie(value)
                })
                    .catch((e: LoginTypes.enqueueMassage) => enqueueSnackbar(e.response.data.detail))
            }
        }
    )
    return (
        <>
            <h1 style={StyleLoginForm.h1}>Login</h1>
            <form onSubmit={formik.handleSubmit}>
                <div style={StyleLoginForm.formBlock}>
                    <div style={StyleLoginForm.emailInput}>
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
                    <div style={StyleLoginForm.passInput}>
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
                    <div style={StyleLoginForm.btnSubmit}>
                        <Button variant="contained" type="submit">
                            Submit
                        </Button>
                    </div>
                    <div style={StyleLoginForm.backRegistration}>
                        <p onClick={() => navigate(registrationPatch)}>Registration</p>
                    </div>
                </div>
            </form>
        </>
    );
}

export default LoginForm;
