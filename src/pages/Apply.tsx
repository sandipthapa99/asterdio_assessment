import {
    Box,
    Button,
    Checkbox,
    Container,
    Flex,
    Grid,
    MantineNumberSize,
    Radio,
    Title,
    useMantineTheme,
} from "@mantine/core";
import { Form, Formik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { IconArrowNarrowLeft } from "@tabler/icons-react";
import { InputField } from "../components/common/InputField";
import DateField from "../components/common/DateField";
import MultiFileDropzone from "../components/common/FileDropzone";
import SelectField from "../components/common/SelectField";
import { admissionFormValidationSchema } from "../validation/AdmissionFormValidation";
import { ApplyFormData } from "../utils/ApplyFormData";
import { useMediaQuery } from "@mantine/hooks";

const ApplyForm = () => {
    const MAX_PHOTOS = 1;
    const MAX_PHOTO_SIZE = 2;

    const theme = useMantineTheme();
    const navigate = useNavigate();
    const smallScreen = useMediaQuery("(max-width: 991px)");

    return (
        <>
            <Container size={"xl"}>
                <Flex
                    sx={{
                        color: theme.colors.blue,
                        alignItems: "center",
                        marginBottom: 16,
                        cursor: "pointer",
                    }}
                    onClick={() => navigate(-1)}
                >
                    <IconArrowNarrowLeft size={24} />
                    <span>Go back</span>
                </Flex>
                <Box
                    sx={{
                        background: "#fff",
                        boxShadow: "rgba(163, 171, 185, 0.2) 6px 0px 18px",
                        borderRadius: 8,
                    }}
                    p={
                        {
                            base: "5px 20px",
                            sm: "10px 50px",
                            md: "20px 60px",
                            xl: "40px 120px",
                        } as unknown as MantineNumberSize
                    }
                    h={"100%"}
                >
                    <Formik
                        initialValues={ApplyFormData}
                        validationSchema={admissionFormValidationSchema}
                        onSubmit={async (values) => {
                            delete values.imagePreviewUrl;
                            if (localStorage.getItem("admission_data")) {
                                const existingData = JSON.parse(
                                    localStorage.getItem("admission_data") ||
                                        "[]"
                                );
                                console.log("1", existingData);
                                existingData.push(values);
                                localStorage.setItem(
                                    "admission_data",
                                    JSON.stringify(existingData)
                                );
                            } else {
                                const data = [];
                                data.push(values);
                                localStorage.setItem(
                                    "admission_data",
                                    JSON.stringify(data)
                                );
                            }
                        }}
                    >
                        {({ touched, errors, values, setFieldValue }) => (
                            <>
                                <Form>
                                    <Title order={4} size={18} weight={600}>
                                        Personal Details
                                    </Title>

                                    <Grid gutter={30} mt={16} mb={16}>
                                        <Grid.Col md={6}>
                                            <InputField
                                                id="full_name"
                                                name={"full_name"}
                                                label={"Full Name"}
                                                placeholder="Full Name"
                                                touch={touched.full_name}
                                                error={errors.full_name}
                                                data-autofocus
                                                withAsterisk
                                            />

                                            <InputField
                                                id="phone"
                                                name={"phone"}
                                                label={"Phone"}
                                                placeholder="phone"
                                                touch={touched.phone}
                                                error={errors.phone}
                                                data-autofocus
                                                withAsterisk
                                            />

                                            <DateField
                                                id="dob"
                                                name="dob"
                                                label="Date of Birth"
                                                placeholder="MM/DD/YYYY"
                                                error={errors.dob}
                                                touch={touched.dob}
                                                withAsterisk
                                                // icon={<IconCalendarEvent size={20} />}
                                                maxDate={new Date()}
                                                onChange={(value: Date) => {
                                                    setFieldValue("dob", value);
                                                }}
                                            />
                                            <Radio.Group
                                                id="gender"
                                                name="gender"
                                                label="Gender"
                                                value={values.gender}
                                                mb={24}
                                                onChange={(gender) =>
                                                    setFieldValue(
                                                        "gender",
                                                        gender
                                                    )
                                                }
                                                sx={{
                                                    ".mantine-RadioGroup-label":
                                                        {
                                                            color:
                                                                theme.colorScheme ===
                                                                "dark"
                                                                    ? theme
                                                                          .colors
                                                                          .dark[0]
                                                                    : theme
                                                                          .colors
                                                                          .gray[8],
                                                            fontWeight: 400,
                                                            marginBottom: 4,
                                                        },
                                                }}
                                                withAsterisk
                                            >
                                                <Flex
                                                    justify={"flex-start"}
                                                    gap={15}
                                                >
                                                    <Radio
                                                        value="male"
                                                        label="Male"
                                                        size="sm"
                                                    />
                                                    <Radio
                                                        value="female"
                                                        label="Female"
                                                        size="sm"
                                                    />
                                                    <Radio
                                                        value="other"
                                                        label="Other"
                                                        size="sm"
                                                    />
                                                </Flex>
                                            </Radio.Group>
                                        </Grid.Col>
                                        <Grid.Col md={6}>
                                            <InputField
                                                id="address"
                                                name={"address"}
                                                label={"Address"}
                                                placeholder="Address"
                                                touch={touched.address}
                                                error={errors.address}
                                                data-autofocus
                                                withAsterisk
                                            />
                                            <InputField
                                                name={"email"}
                                                label={"Email"}
                                                placeholder={"Enter your email"}
                                                error={errors.email}
                                                touch={touched.email}
                                                withAsterisk
                                            />
                                            <MultiFileDropzone
                                                name="image"
                                                labelName="Upload your photo"
                                                textMuted={`More than ${MAX_PHOTOS} images cannot be uploaded. File supported: .jpeg, .jpg, .png. Maximum size ${MAX_PHOTO_SIZE}MB.`}
                                                error={
                                                    (errors.imagePreviewUrl as string) ||
                                                    (errors.image as string)
                                                }
                                                touch={
                                                    touched.image as unknown as boolean
                                                }
                                                imagePreview="imagePreviewUrl"
                                                maxFiles={MAX_PHOTOS}
                                                maxSize={MAX_PHOTO_SIZE}
                                                multiple
                                                showFileDetail
                                            />
                                        </Grid.Col>
                                    </Grid>
                                    <Title
                                        order={4}
                                        size={18}
                                        weight={600}
                                        mb={0}
                                    >
                                        Contact Person Details
                                    </Title>
                                    <Grid gutter={30} mt={16} mb={16}>
                                        <Grid.Col md={6}>
                                            <InputField
                                                id="guardian"
                                                name={"guardian_name"}
                                                label={"Full Name"}
                                                placeholder="Full Name"
                                                touch={touched.guardian_name}
                                                error={errors.guardian_name}
                                                data-autofocus
                                                withAsterisk
                                            />
                                            <InputField
                                                id="guardian"
                                                name={"guardian_phone"}
                                                label={"Phone"}
                                                placeholder="Phone Number"
                                                touch={touched.guardian_phone}
                                                error={errors.guardian_phone}
                                                data-autofocus
                                                withAsterisk
                                            />
                                        </Grid.Col>
                                        <Grid.Col md={6}>
                                            <InputField
                                                id="contact_person_address"
                                                name={"contact_person_address"}
                                                label={"Address"}
                                                placeholder="Address"
                                                touch={
                                                    touched.contact_person_address
                                                }
                                                error={
                                                    errors.contact_person_address
                                                }
                                                data-autofocus
                                                withAsterisk
                                            />
                                            <InputField
                                                id="contact_person_relation"
                                                name={"contact_person_relation"}
                                                label={"Relation"}
                                                placeholder="Relation to contact person"
                                                touch={
                                                    touched.contact_person_relation
                                                }
                                                error={
                                                    errors.contact_person_relation
                                                }
                                                data-autofocus
                                                withAsterisk
                                            />
                                        </Grid.Col>
                                    </Grid>
                                    <Title
                                        order={4}
                                        size={18}
                                        weight={600}
                                        mb={0}
                                    >
                                        Course Details
                                    </Title>
                                    <Grid gutter={30} mt={16}>
                                        <Grid.Col md={6}>
                                            <SelectField
                                                id="faculty"
                                                name={"faculty"}
                                                label={"Faculty"}
                                                handleChange={(data) => {
                                                    setFieldValue(
                                                        "faculty",
                                                        data
                                                    );
                                                }}
                                                searchable
                                                placeholder="Select a faculty"
                                                data={[
                                                    {
                                                        value: "business",
                                                        label: "Business",
                                                    },
                                                    {
                                                        value: "information_technologu",
                                                        label: "Information Technology",
                                                    },
                                                    {
                                                        value: "agriculture",
                                                        label: "Agriculture",
                                                    },
                                                    {
                                                        value: "journalism",
                                                        label: "Journalism",
                                                    },
                                                ]}
                                                touch={touched.faculty}
                                                error={errors.faculty}
                                                withAsterisk
                                            />
                                        </Grid.Col>
                                        <Grid.Col md={6}>
                                            <SelectField
                                                id="program"
                                                name={"program"}
                                                label={"Program"}
                                                handleChange={(data) => {
                                                    setFieldValue(
                                                        "program",
                                                        data
                                                    );
                                                }}
                                                searchable
                                                placeholder="Select a program"
                                                data={[
                                                    {
                                                        value: "Bachelors",
                                                        label: "Bachelors",
                                                    },
                                                    {
                                                        value: "Masters",
                                                        label: "Masters",
                                                    },
                                                    {
                                                        value: "Phd",
                                                        label: "Phd",
                                                    },
                                                ]}
                                                touch={touched.program}
                                                error={errors.program}
                                                withAsterisk
                                            />
                                        </Grid.Col>
                                    </Grid>

                                    <Checkbox
                                        label={
                                            <>
                                                I have read the{" "}
                                                <Link
                                                    to={
                                                        "https://www.lipsum.com/"
                                                    }
                                                    target="_blank"
                                                >
                                                    terms and conditions
                                                </Link>
                                            </>
                                        }
                                        mb={24}
                                        checked={values.is_terms_condition}
                                        onChange={(event) =>
                                            setFieldValue(
                                                "is_terms_condition",
                                                event.target.checked
                                            )
                                        }
                                        error={
                                            touched.is_terms_condition &&
                                            errors.is_terms_condition
                                                ? errors?.is_terms_condition
                                                : null
                                        }
                                    />
                                    <Button
                                        type="submit"
                                        fullWidth={smallScreen}
                                    >
                                        Submit
                                    </Button>
                                </Form>
                            </>
                        )}
                    </Formik>
                </Box>
            </Container>
        </>
    );
};

export default ApplyForm;
