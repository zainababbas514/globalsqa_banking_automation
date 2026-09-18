import BasePage from "./basePage";

class CustomerDashboard extends BasePage {

    elements = {
        // Account
        accountDropdown: () => cy.get("#accountSelect"),
        loggedInUserName: () => cy.get("div.borderM strong span.fontBig"),
        accountBalance: () => cy.get("div.center strong.ng-binding").eq(1),

        // Deposit
        depositTabButton: () => cy.get("button[ng-class='btnClass2']"),
        depositForm: () => cy.get("form[ng-submit='deposit()']"),
        depositInput: () => cy.get("form[ng-submit='deposit()'] input"),
        depositSubmitButton: () => cy.get("form[ng-submit='deposit()'] button"),

        // Withdraw
        withdrawTabButton: () => cy.get("button[ng-class='btnClass3']"),
        withdrawForm: () => cy.get("form[ng-submit='withdrawl()']"),
        withdrawInput: () => cy.get("form[ng-submit='withdrawl()'] input"),
        withdrawSubmitButton: () => cy.get("form[ng-submit='withdrawl()'] button"),

        // Transactions
        transactionsButton: () => cy.get("button[ng-class='btnClass1']"),

        // Messages
        message: () => cy.get("span[ng-show='message']")
    };


    // Account

    verifyLoggedInUser(userName) {
        this.elements.loggedInUserName()
            .should("have.text", userName);

        cy.url()
            .should("include", "account");
    }

    getAccountBalance() {
        return this.elements.accountBalance()
            .invoke("text")
            .then(balance => parseFloat(balance.trim()));
    }


    // Common

    clickTab(tab) {
        this.clickElement(tab);
    }

    enterField(field, value) {
        this.enterText(field, value);
    }


    // Deposit

    verifyDepositFormDisplayed() {
        this.verifyElementVisible(this.elements.depositForm);
    }

    clickDepositSubmitButton() {
        this.clickElement(this.elements.depositSubmitButton);
    }


    // Withdraw

    verifyWithdrawFormDisplayed() {
        this.verifyElementVisible(this.elements.withdrawForm);
    }

    clickWithdrawSubmitButton() {
        this.clickElement(this.elements.withdrawSubmitButton);
    }


    // Messages

    getMessage() {
        return this.elements.message();
    }
}

export default CustomerDashboard;