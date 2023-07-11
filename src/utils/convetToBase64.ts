export const convertToBase64 = (file: File) => {
    let reader = new FileReader();

    reader.onloadend = () => {
        console.log("result: ", reader.result);
        return reader.result;
    };
    reader.readAsDataURL(file);
};
