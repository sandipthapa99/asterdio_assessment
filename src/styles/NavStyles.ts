import { createStyles } from "@mantine/styles";

export const useNavStyles = createStyles((theme) => ({
    root: {
        position: "relative",
        zIndex: 1,
    },
    dropdown: {
        position: "absolute",
        top: 60,
        left: 0,
        right: 0,
        zIndex: 0,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        borderTopWidth: 0,
        overflow: "hidden",

        // show dropdown for social icons for smaller screens only
        [theme.fn.largerThan("sm")]: {
            display: "none",
        },
    },
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100%",
        "& a": {
            textDecoration: "none",
            color: theme.colors.blue,
            span: {
                color: theme.colors.cyan,
            },
        },
    },
    links: {
        [theme.fn.smallerThan("sm")]: {
            display: "none",
        },
    },
    social: {
        width: 260,
        // hide from navbar for smaller screens
        [theme.fn.smallerThan("sm")]: {
            width: "auto",
            marginLeft: "auto",
        },
    },
    burger: {
        [theme.fn.largerThan("sm")]: {
            display: "none",
        },
    },
}));
