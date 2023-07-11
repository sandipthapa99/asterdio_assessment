export type ApplyFormDataProps = {
    full_name: string;
    address: string;
    phone: string;
    email: string;
    guardian_name: string;
    guardian_phone: string;
    contact_person_address: string;
    contact_person_relation: string;
    faculty: string;
    program: string;
    gender: string;
    dob: string;
    image: string | string[];
    imagePreviewUrl?: string | string[] | undefined;
    is_terms_condition: boolean;
};

export const ApplyFormData: ApplyFormDataProps = {
    full_name: "",
    address: "",
    phone: "",
    email: "",
    guardian_name: "",
    guardian_phone: "",
    contact_person_address: "",
    contact_person_relation: "",
    faculty: "",
    program: "",
    gender: "male",
    dob: "",
    image: [],
    is_terms_condition: false,
    imagePreviewUrl: [],
};
