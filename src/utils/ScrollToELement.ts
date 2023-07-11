/**
 * Scroll to the respective element by providing it's Id
 * @param elementId string
 */
export const scrollToElement = (
    elementId: string,
    behavior: ScrollBehavior
) => {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: behavior, block: "center" });
    }
};
