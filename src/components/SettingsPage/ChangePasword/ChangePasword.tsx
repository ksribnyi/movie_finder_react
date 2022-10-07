import {useNavigate} from "react-router";
import {useSnackbar} from "notistack";
import {useFormik} from "formik";
import loginSchema from "../../../utils/LoginForm.shema";
import {LoginTypes} from "../../LoginPage/login.types";
import {TextField} from "@mui/material";
import {Button} from "@material-ui/core";
import {registrationPatch} from "../../../utils/variables";
import React from "react";

const StyleLoginForm = {
    formBlock: {
        height: 280,
        margin: "auto",
        display: "flex",
        flexDirection: "column" as "column",
        alignItems: "center" as "center",
    },
    emailInput: {
        marginTop: 30,
    },
    passInput: {
        marginTop: 30
    },
    btnSubmit: {
        marginTop: 70
    },
    h1: {
        margin: "auto",
        textAlign: "center" as "center"
    }
}

const ChangePassword = () => {
    const {enqueueSnackbar} = useSnackbar()
    const formik = useFormik(
        {
            initialValues: {oldPassword: "", newPassword: ""},
            validationSchema: loginSchema,
            onSubmit: async (values) => {

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
                            id="oldPassword"
                            type="oldPassword"
                            name="oldPassword"
                            label="Old password"
                            variant="standard"
                            value={formik.values.oldPassword}
                            onChange={formik.handleChange}
                            error={formik.touched.oldPassword && Boolean(formik.errors.oldPassword)}
                            helperText={formik.touched.oldPassword && formik.errors.oldPassword}/>
                    </div>
                    <div style={StyleLoginForm.passInput}>
                        <TextField
                            id="newPassword"
                            name="newPassword"
                            label="New password"
                            type="password"
                            variant="standard"
                            value={formik.values.newPassword}
                            onChange={formik.handleChange}
                            error={formik.touched.newPassword && Boolean(formik.errors.newPassword)}
                            helperText={formik.touched.newPassword && formik.errors.newPassword}
                        />
                    </div>
                    <div style={StyleLoginForm.btnSubmit}>
                        <Button variant="contained" type="submit">
                            Submit
                        </Button>
                    </div>
                </div>
            </form>
        </>
    );
}

export default ChangePassword