class BasePage {

    clickElement(element) {
        element().click();
    }

    enterText(element, text) {
        element()
            .clear()
            .type(text);
    }

    selectOption(element, option) {
        element().select(option);
    }

    verifyElementVisible(element) {
        element().should("be.visible");
    }

    verifyElementContainsText(element, text) {
        element().should("contain", text);
    }
}

export default BasePage;