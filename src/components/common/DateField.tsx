import { useMantineTheme } from "@mantine/core";
import { DateInput, DateInputProps } from "@mantine/dates";
import type { FieldProps } from "formik";
import { Field } from "formik";
import { DateFieldProps } from "../../types";

const DateField = ({
    name,
    error,
    touch,
    marginIgnore,
    ...restProps
}: DateFieldProps & DateInputProps) => {
    const errTouch = error && touch ? error : null;
    const theme = useMantineTheme();

    return (
        <Field name={name}>
            {({ field }: FieldProps) => (
                <DateInput
                    {...field}
                    {...restProps}
                    error={errTouch}
                    sx={{
                        ".mantine-DateInput-label": {
                            color:
                                theme.colorScheme === "dark"
                                    ? theme.colors.dark[0]
                                    : theme.colors.gray[8],
                            fontWeight: 400,
                            marginBottom: 6,
                            fontSize: 14,
                        },
                    }}
                    radius="md"
                    size="md"
                    mb={marginIgnore ? 0 : 24}
                />
            )}
        </Field>
    );
};

export default DateField;
