import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import CustomerDashboard from "../../../pages/customerDashboard";

const customerDashboard = new CustomerDashboard();


Given("the account has sufficient balance for a withdrawal of {int}", (amount) => {
    customerDashboard.clickTab(
        customerDashboard.elements.depositTabButton
    );

    customerDashboard.enterField(
        customerDashboard.elements.depositInput,
        amount
    );

    customerDashboard.clickDepositSubmitButton();
});


When("the user enters {int} as withdrawal amount", (amount) => {
    customerDashboard.enterField(
        customerDashboard.elements.withdrawInput,
        amount
    );
});


When("the user clicks the Withdraw button", () => {
    customerDashboard.clickWithdrawSubmitButton();
});


Then("a withdrawal success message should be displayed", () => {
    customerDashboard.getMessage()
        .should("contain", "Transaction successful");
});


Then("the account balance should be reduced by {int}", (amount) => {
    cy.get("@accountBalance").then(balance => {
        const expectedBalance = balance - amount;

        customerDashboard
            .getAccountBalance()
            .should("equal", expectedBalance);
    });
});


Then("a withdrawal error message should be displayed", () => {
    customerDashboard.getMessage()
        .should("contain", "Transaction Failed");
});