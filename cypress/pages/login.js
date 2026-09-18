import BasePage from "./basePage";

class LoginPage extends BasePage {
    elements = {
        customerLoginButton: () => cy.get("button[ng-click='customer()']"),
        managerLoginButton: () => cy.get("button[ng-click='manager()']"),
        usersDropdown: () => cy.get("#userSelect"),
        loginButton: () => cy.get("button[type='submit']")
    }

    clickCustomerLoginButton() {
        this.clickElement(this.elements.customerLoginButton);
    }

    clickManagerLoginButton() {
        this.clickElement(this.elements.managerLoginButton);
    }

    selectUser(username) {
        this.selectOption(this.elements.usersDropdown, username);
    }

    clickLoginButton() {
        this.verifyElementVisible(this.elements.loginButton);
        this.clickElement(this.elements.loginButton);
    }

    customerLogin(username) {
        this.clickCustomerLoginButton();
        this.selectUser(username);
        this.clickLoginButton();
    }
}

export default LoginPage;