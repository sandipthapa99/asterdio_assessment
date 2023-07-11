import * as Yup from "yup";
import dayjs from "dayjs";

import {
    emailValidationSchema,
    phoneNumberValidationSchema,
    stringReq,
    stringUnReq,
} from "./GlobalValidations";

export const admissionFormValidationSchema = Yup.object().shape({
    full_name: stringReq,
    address: stringUnReq,
    phone: phoneNumberValidationSchema,
    email: emailValidationSchema,
    guardian_name: stringReq,
    guardian_phone: phoneNumberValidationSchema,
    contact_person_address: stringUnReq,
    contact_person_relation: stringReq,
    faculty: stringUnReq,
    program: stringUnReq,
    gender: stringReq,
    dob: Yup.date()
        .max(
            dayjs(new Date()).endOf("month").subtract(16, "years").toDate(),
            "You must be at least 16 years"
        )
        .required("Required"),
    image: Yup.array()

        .min(1, "Required field")
        .max(1, "No more than one image is allowed.")
        .of(
            Yup.mixed()
                .test("fileFormat", "Unsupported file format", (value: any) => {
                    return value;
                })
                .test("fileSize", "File too large", (value: any) => {
                    return value;
                })
        )
        .required("Required field"),
});
