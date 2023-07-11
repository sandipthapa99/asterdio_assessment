import * as Yup from "yup";

export const phoneRegExp =
    /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;

/** Checks if Email is valid */
export const emailValidationSchema = Yup.string()
    .email("Invalid email")
    .required("Required Field");

/**Checks if Password is valid */
export const passwordValidate = Yup.string()
    .required("Required field")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(
        /^(?=.*[0-9])(?=.*[#?!@$%^&*"])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9#?!@$%^&*"]/,
        "Password must contain 1 numberic value, 1 uppercase and 1 special character."
    );

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

export const descriptionReq = Yup.string()
    .required("Description is required")
    .min(10, "Description is too short");

/**
 * Checks if date is provided
 */
export const dateReq = Yup.date().required("Date Required");

export const termsAndConditionValidation = Yup.boolean()
    .required("The terms and conditions must be accepted.")
    .oneOf([true], "The terms and conditions must be accepted.");
