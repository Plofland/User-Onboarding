import * as yup from "yup";

export default yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(2, "Name must be at least 3 characters long"),
  email: yup.string().required("Must be a valid email"),
  password: yup
    .string()
    .required("Password is required")
    .matches(/^[a-z]+$/, "Only use letters for the password")
    .min(4, "Password must be at least 4 characters long"),
  role: yup
    .string()
    .oneOf(
      ["student", "ta", "instructor", "alumni"],
      "Please select a Lambda School role",
    ),
  terms: yup.boolean().required("Please check Terms of Service"),
});
