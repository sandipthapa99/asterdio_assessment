import { createStyles } from "@mantine/styles";

export const useHomepageStyles = createStyles((theme) => ({
    wrapper: {
        position: "relative",
        paddingTop: 120,
        paddingBottom: 80,

        [theme.fn.smallerThan("sm")]: {
            paddingTop: 80,
            paddingBottom: 60,
        },
    },

    inner: {
        position: "relative",
        zIndex: 1,
    },

    dots: {
        position: "absolute",
        color:
            theme.colorScheme === "dark"
                ? theme.colors.dark[5]
                : theme.colors.gray[1],

        [theme.fn.smallerThan("sm")]: {
            display: "none",
        },
    },

    dotsLeft: {
        left: 0,
        top: 0,
    },

    title: {
        textAlign: "center",
        fontWeight: 800,
        fontSize: 40,
        letterSpacing: -1,
        color: theme.colorScheme === "dark" ? theme.white : theme.black,
        marginBottom: theme.spacing.xs,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,

        [theme.fn.smallerThan("xs")]: {
            fontSize: 28,
            textAlign: "left",
        },
    },

    highlight: {
        color: theme.colors[theme.primaryColor][
            theme.colorScheme === "dark" ? 4 : 6
        ],
    },

    description: {
        textAlign: "center",

        [theme.fn.smallerThan("xs")]: {
            textAlign: "left",
            fontSize: theme.fontSizes.md,
        },
    },

    controls: {
        marginTop: theme.spacing.lg,
        display: "flex",
        justifyContent: "center",

        [theme.fn.smallerThan("xs")]: {
            flexDirection: "column",
        },
    },

    control: {
        "&:not(:first-of-type)": {
            marginLeft: theme.spacing.md,
        },

        [theme.fn.smallerThan("xs")]: {
            height: 42,
            fontSize: theme.fontSizes.md,

            "&:not(:first-of-type)": {
                marginTop: theme.spacing.md,
                marginLeft: 0,
            },
        },
    },
}));
