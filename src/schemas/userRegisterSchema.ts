import * as yup from "yup";

const validationSchema = yup.object().shape({
  displayName: yup
    .string()
    .min(2, "Display name must be at least 2 characters")
    .max(15, "Display name must be at most 15 characters")
    .required("Display name is required"),

  username: yup
    .string()
    .min(3, "Username must be at least 3 characters")
    .max(10, "Username must be at most 10 characters")
    .matches(/^[a-zA-Z0-9_]+$/, "Invalid userName")
    .required("Username is required"),

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
