import * as yup from "yup";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),

  password: yup
    .string()
    .min(8, "Password must contain 8 characters")
    .max(20, "Password must be at most 20 characters")
    .matches(/^(?=.*[a-z])(?=.*\d).{8,}$/, "Week password")
    .required("Password is required"),
});

export default validationSchema;
