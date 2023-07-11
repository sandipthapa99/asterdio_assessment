import React from "react";
import { useNavStyles } from "../styles/NavStyles";
import { useDisclosure } from "@mantine/hooks";
import {
    ActionIcon,
    Burger,
    Container,
    Group,
    Header,
    Paper,
    Transition,
} from "@mantine/core";
import { Link } from "react-router-dom";
import {
    IconBrandInstagram,
    IconBrandTwitter,
    IconBrandYoutube,
} from "@tabler/icons-react";

const Nav = () => {
    const [opened, { toggle }] = useDisclosure(false);
    const { classes } = useNavStyles();

    return (
        <Header height={60} mb={64} className={classes.root}>
            <Container className={classes.header} size={"xl"}>
                <Link to={"/"}>
                    <h2>
                        College <span>Admission</span>
                    </h2>
                </Link>
                <Group spacing={5} className={classes.links}>
                    <Group
                        spacing={0}
                        className={classes.social}
                        position="right"
                        noWrap
                    >
                        <ActionIcon size="lg">
                            <Link
                                to={"https://www.twitter.com"}
                                target="_blank"
                            >
                                <IconBrandTwitter size="1.1rem" stroke={1.5} />
                            </Link>
                        </ActionIcon>
                        <ActionIcon size="lg">
                            <Link
                                to={"https://www.youtube.com"}
                                target="_blank"
                            >
                                <IconBrandYoutube size="1.1rem" stroke={1.5} />
                            </Link>
                        </ActionIcon>
                        <ActionIcon size="lg">
                            <Link
                                to={"https://www.instagram.com"}
                                target="_blank"
                            >
                                <IconBrandInstagram
                                    size="1.1rem"
                                    stroke={1.5}
                                />
                            </Link>
                        </ActionIcon>
                    </Group>
                </Group>

                <Burger
                    opened={opened}
                    onClick={toggle}
                    className={classes.burger}
                    size="sm"
                />

                <Transition
                    transition="pop-top-right"
                    duration={200}
                    mounted={opened}
                >
                    {(styles) => (
                        <Paper
                            className={classes.dropdown}
                            withBorder
                            style={styles}
                        >
                            <Group
                                spacing={0}
                                className={classes.social}
                                position="right"
                                noWrap
                            >
                                <ActionIcon size="lg">
                                    <IconBrandTwitter
                                        size="1.1rem"
                                        stroke={1.5}
                                    />
                                </ActionIcon>
                                <ActionIcon size="lg">
                                    <IconBrandYoutube
                                        size="1.1rem"
                                        stroke={1.5}
                                    />
                                </ActionIcon>
                                <ActionIcon size="lg">
                                    <IconBrandInstagram
                                        size="1.1rem"
                                        stroke={1.5}
                                    />
                                </ActionIcon>
                            </Group>
                        </Paper>
                    )}
                </Transition>
            </Container>
        </Header>
    );
};

export default Nav;
