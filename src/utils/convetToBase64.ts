import { Dispatch, SetStateAction } from "react";

export const convertToBase64 = (
    file: File,
    setImage: Dispatch<SetStateAction<string | ArrayBuffer | null | undefined>>
) => {
    let reader = new FileReader();

    reader.onloadend = () => {
        console.log("result: ", reader.result);
        setImage(reader.result);
        return reader.result;
    };
    reader.readAsDataURL(file);
};
