import type { SelectProps } from "@mantine/core";
import { useMantineTheme } from "@mantine/core";
import { Select } from "@mantine/core";
import type { FieldProps } from "formik";
import { Field } from "formik";
import { InputFieldProps } from "../../types";

const SelectField = ({
    name,
    error,
    touch,
    marginIgnore,
    handleChange,
    ...rest
}: InputFieldProps & SelectProps & React.RefAttributes<HTMLInputElement>) => {
    const errTouch = error && touch ? error : null;
    const theme = useMantineTheme();
    return (
        <Field name={name}>
            {({ field, form }: FieldProps) => {
                return (
                    <Select
                        {...field}
                        {...rest}
                        name={name}
                        onChange={
                            handleChange
                                ? handleChange
                                : (value) => form.setFieldValue(name, value)
                        }
                        mb={marginIgnore ? 0 : 24}
                        error={errTouch}
                        radius="md"
                        onBlurCapture={() => form.setFieldTouched(name, true)}
                        sx={{
                            "& .mantine-Select-label": {
                                color:
                                    theme.colorScheme === "dark"
                                        ? theme.colors.dark[0]
                                        : theme.colors.gray[8],
                                fontWeight: 400,
                                marginBottom: 6,
                            },
                        }}
                        size="md"
                    />
                );
            }}
        </Field>
    );
};

export default SelectField;
