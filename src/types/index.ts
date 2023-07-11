import { CSSProperties, ReactNode } from "react";

export type InputFieldProps = {
    name: string;
    labelName?: string;
    touch?: boolean;
    withAsterisk?: boolean;
    error?: string;
    placeHolder?: string;
    textMuted?: string;
    defaultValue?: any;
    as?: string;
    typeOf?: string;
    fieldRequired?: boolean;
    forgotPassword?: string;
    variables?: {
        label: string;
        value: string;
    }[];
    handleChange?: (data: string) => void;
    data?: any;
    haveIcon?: boolean;
    inputIcon?: any;
    create?: boolean;
    value?: any;
    hasForgot?: boolean;
    marginIgnore?: boolean;
    minimum?: number;
    maximum?: number;
};

export type DateFieldProps = {
    name: string;
    labelName?: ReactNode;
    placeHolder?: string;
    error?: string;
    touch?: boolean;
    fieldRequired?: boolean;
    textMuted?: ReactNode;
    marginIgnore?: boolean;
};

export type FileDropzoneProps = {
    name: string;
    accept: string[];
    fieldRequired?: boolean;
    labelName?: string;
    multiple?: boolean;
    maxSize: number;
    imagePreview?: string;
    error?: string;
    touch?: boolean;
    style?: CSSProperties;
};

export type MultiFileDropzoneProps = {
    name: string;
    labelName?: ReactNode;
    textMuted?: ReactNode;
    accept?: string[];
    multiple?: boolean;
    maxSize?: number;
    maxFiles?: number;
    imagePreview?: string;
    error?: string;
    touch?: boolean;
    style?: CSSProperties;
    displayView?: "grid" | "list";
    showFileDetail?: boolean;
    withCloseButton?: boolean;
};

export type ApplicantsProps = Array<{
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
    image: string;
}>;
