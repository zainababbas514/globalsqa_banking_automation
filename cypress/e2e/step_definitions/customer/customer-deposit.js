import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

import CustomerDashboard from "../../../pages/customerDashboard";

const customerDashboard = new CustomerDashboard();


When("the user enters a deposit amount of {int}", (amount) => {
    customerDashboard.enterField(
        customerDashboard.elements.depositInput,
        amount
    );
});


When("the user clicks the Deposit button", () => {
    customerDashboard.clickDepositSubmitButton();
});


Then("a deposit success message should be displayed", () => {
    customerDashboard.getMessage()
        .should("contain", "Deposit Successful");
});


Then("the account balance should increase by {int}", (amount) => {
    cy.get("@accountBalance").then(balance => {
        const balanceAfterDeposit = balance + amount;

        customerDashboard
            .getAccountBalance()
            .should("equal", balanceAfterDeposit);
    });
});