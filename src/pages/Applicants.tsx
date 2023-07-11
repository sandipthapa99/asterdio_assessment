import React, { useEffect } from "react";

import { useState } from "react";
import {
    Table,
    ScrollArea,
    Group,
    Avatar,
    Text,
    Container,
    Title,
    Button,
    Flex,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";

const Applicants = () => {
    useEffect(() => {
        const handleStorageChange = (event: StorageEvent) => {
            if (event.key === "admission_data") {
                // Update state with new data
                setData(
                    JSON.parse(localStorage.getItem("admission_data") || "")
                );
            }
        };

        // Adding event listener when the component mounts
        window.addEventListener("storage", handleStorageChange);

        // Removing event listener when the component unmounts
        return () => {
            window.removeEventListener("storage", handleStorageChange);
        };
    }, []);

    const [data, setData] = useState(
        JSON.parse(localStorage.getItem("admission_data") ?? "[]")
    );

    const rows = data.map((item: any, index: number) => {
        console.log("first", item);
        return (
            <tr key={index}>
                <td>
                    <Group spacing="sm">
                        {/* <Avatar size={48} src={item.image ?? ""} radius={48} /> */}
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
