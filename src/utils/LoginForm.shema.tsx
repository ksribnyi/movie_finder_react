import * as Yup from "yup";

const loginSchema = Yup.object().shape({
    password: Yup.string()
        .min(8, "Too Short!")
        .max(20, "Too Long!")
        .required("Required"),
    email: Yup.string().email("Invalid email").required("Required")
});

export default loginSchema