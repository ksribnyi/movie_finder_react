import * as Yup from "yup";

const ChangePasswordSchema = Yup.object().shape({
    newPassword: Yup.string()
        .min(8, "Too Short!")
        .max(20, "Too Long!")
        .required("Required")
});

export default ChangePasswordSchema