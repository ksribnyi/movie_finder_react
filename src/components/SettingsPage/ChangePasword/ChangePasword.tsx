import {useSnackbar} from "notistack";
import {useFormik} from "formik";
import {TextField, Button} from "@mui/material";
import React from "react";
import {LoginTypes} from "../../LoginPage/login.types";
import {UserAPI} from "../../../api/User/UserAPI";
import ChangePasswordSchema from "../../../utils/ChangePassword.shema";

const StyleLoginForm = {
    LogBlock: {
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
        marginTop: 30,
    },
    passInput: {
        marginTop: 30
    },
    btnSubmit: {
        marginTop: 70
    }
}

const ChangePassword = () => {
    const {enqueueSnackbar} = useSnackbar()
    const formik = useFormik(
        {
            initialValues: {oldPassword: "", newPassword: ""},
            validationSchema: ChangePasswordSchema,
            onSubmit: async (values) => {
                await UserAPI.changePassword(values)
                    .catch((e: LoginTypes.enqueueMassage) => enqueueSnackbar(e.response.data.detail))
            }
        }
    )
    return (
            <form style={StyleLoginForm.LogBlock} onSubmit={formik.handleSubmit}>
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
                        <Button style={{backgroundColor: "#e0e0e0", color: "black"}} variant="contained" type="submit">
                            Submit
                        </Button>
                    </div>
                </div>
            </form>
    )
}

export default ChangePassword