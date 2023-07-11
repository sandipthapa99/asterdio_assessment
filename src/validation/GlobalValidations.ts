import * as Yup from "yup";

export const phoneRegExp =
    /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;

/** Checks if Email is valid */
export const emailValidationSchema = Yup.string()
    .email("Invalid email")
    .required("Required Field");

/**Checks if phone number is valid */
export const phoneNumberValidationSchema = Yup.string()
    .matches(phoneRegExp, "Invalid phone number")
    .required("Required Field")
    .nullable();

// Checks if input consists only string characters
export const stringReq = Yup.string()
    .required("Required field")
    .matches(/^[^!@#$%^&*+=<>:;|~]*$/, {
        message: "Symbols are not allowed",
    })
    .matches(/^[^\d]*$/, "Field cannot contain numbers");

// Checks if input consists not only string characters
export const stringUnReq = Yup.string().required("Required Field").nullable();
