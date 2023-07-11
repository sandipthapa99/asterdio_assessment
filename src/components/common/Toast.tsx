import { showNotification } from "@mantine/notifications";
import { IconCheck, IconCircleX } from "@tabler/icons-react";
import type { ReactNode } from "react";

export const toast = {
    error: (message: ReactNode) =>
        showNotification({
            title: "Error",
            message,
            color: "red",
            icon: <IconCircleX />,
        }),
    success: (message: ReactNode) =>
        showNotification({
            title: "Success",
            message,
            color: "green",
            icon: <IconCheck />,
        }),
};
