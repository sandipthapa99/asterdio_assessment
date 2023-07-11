import React, { useEffect } from "react";

import { useState } from "react";
import {
    createStyles,
    Table,
    Checkbox,
    ScrollArea,
    Group,
    Avatar,
    Text,
    rem,
    Container,
    Title,
    Button,
    Box,
    Flex,
} from "@mantine/core";
import { ApplicantsProps } from "../types";
import { Link, useNavigate } from "react-router-dom";

const applicants: ApplicantsProps = JSON.parse(
    localStorage.getItem("admission_data") ?? "[]"
);

const Applicants = () => {
    const [data, setData] = useState(applicants);

    useEffect(() => {
        const handleStorageChange = (event: StorageEvent) => {
            // Check if the updated data is from the specific key you're interested in
            if (event.key === "admission_data") {
                setData(JSON.parse(event.newValue || ""));
                // Update your component or perform any necessary actions
                console.log("Data in localStorage has changed!");
            }
        };

        // Add the event listener when the component mounts
        window.addEventListener("storage", handleStorageChange);

        // Remove the event listener when the component unmounts
        return () => {
            window.removeEventListener("storage", handleStorageChange);
        };
    }, []);

    const [selection, setSelection] = useState(["1"]);
    const toggleRow = (id: string) =>
        setSelection((current) =>
            current.includes(id)
                ? current.filter((item) => item !== id)
                : [...current, id]
        );
    // const toggleAll = () =>
    //     setSelection((current) =>
    //         current.length === data.length ? [] : data.map((item) => item.id)
    //     );

    const rows = data.map((item, index) => {
        return (
            <tr key={index}>
                <td>
                    <Group spacing="sm">
                        <Avatar size={26} src={item.image ?? ""} radius={26} />
                        <Text size="sm" weight={500}>
                            {item.full_name}
                        </Text>
                    </Group>
                </td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.dob}</td>
                <td>
                    {item.guardian_name},{item.guardian_phone}
                </td>
                <td>
                    {item.faculty},{item.program}
                </td>
            </tr>
        );
    });

    const navigate = useNavigate();
    return (
        <>
            <Container size={"xl"}>
                <ScrollArea>
                    {rows && rows.length > 0 ? (
                        <Table miw={800} verticalSpacing="sm">
                            <thead>
                                <tr>
                                    <th>Applicant</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>DOB</th>
                                    <th>Contact Person</th>
                                    <th>Applied for</th>
                                </tr>
                            </thead>
                            <tbody>{rows}</tbody>
                        </Table>
                    ) : (
                        <Flex
                            direction={"column"}
                            justify={"center"}
                            align={"center"}
                        >
                            <Title align="center" order={3} mb={16}>
                                No Applicants data to show!
                            </Title>
                            <Button onClick={() => navigate("/apply")}>
                                Go to Application
                            </Button>
                        </Flex>
                    )}
                </ScrollArea>
            </Container>
        </>
    );
};

export default Applicants;
