import * as Yup from "yup";

const registrationSchema = Yup.object().shape({
    password: Yup.string()
        .min(8, "Too Short!")
        .max(20, "Too Long!")
        .required("Required"),
    confirmPassword: Yup.string().oneOf([Yup.ref("password"), ""], "Password must match").required("Required"),
    email: Yup.string().email("Invalid email").required("Required")
});

export default registrationSchema