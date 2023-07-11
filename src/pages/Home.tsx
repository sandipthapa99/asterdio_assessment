import { Button, Container, Text, Title } from "@mantine/core";
import React from "react";
import { useHomepageStyles } from "../styles/HomepageStyles";
import { useNavigate } from "react-router";

const Home = () => {
    const { classes } = useHomepageStyles();

    const navigate = useNavigate();

    return (
        <Container className={classes.wrapper} size={"xl"}>
            <div className={classes.inner}>
                <Title className={classes.title}>
                    Easy and fast{" "}
                    <Text
                        component="span"
                        className={classes.highlight}
                        inherit
                    >
                        college admission
                    </Text>{" "}
                    for you
                </Title>

                <Container p={0} size={600}>
                    <Text
                        size="lg"
                        color="dimmed"
                        className={classes.description}
                    >
                        It&apos;s a good idea to start the college application
                        process several months before application deadlines,
                        especially if you have other obligations like school or
                        work
                    </Text>
                </Container>

                <div className={classes.controls}>
                    <Button
                        className={classes.control}
                        size="lg"
                        variant="default"
                        color="gray"
                        onClick={() => navigate("/applicants")}
                    >
                        View Applications
                    </Button>
                    <Button
                        className={classes.control}
                        size="lg"
                        onClick={() => navigate("/apply")}
                    >
                        Apply as Student
                    </Button>
                </div>
            </div>
        </Container>
    );
};

export default Home;
