import * as yup from "yup"

export default yup.object().shape({
    username:yup
        .string()
        .required("username is required")
        .min(2, "username must be at least 3 characters long"),
    email: yup.string().required("Must be a valid email")
    role: yup
    
})