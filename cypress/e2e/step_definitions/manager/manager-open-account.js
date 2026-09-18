import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ManagerDashboard from "../../../pages/managerDashboard";

const managerDashboard = new ManagerDashboard();


// Scenario: Verify Open Account functionality

When("the user selects the customer {string}", (customerName) => {
    managerDashboard.selectCustomer(customerName);
});


When("the user selects the currency {string}", (currency) => {
    managerDashboard.selectCurrency(currency);
});


When("the user clicks the Process button", () => {
    let alertText;

    cy.on("window:alert", (text) => {
        alertText = text;
    });

    managerDashboard.clickSubmitButton();

    cy.then(() => {
        const accountNumber = alertText.split(":")[1].trim();
        Cypress.env("accountNumber", accountNumber);
    });
});


Then("the account should exist in the customers table", () => {
    managerDashboard.clickTab(
        managerDashboard.elements.customersTab
    );

    const accountNumber = Cypress.env("accountNumber");

    managerDashboard.verifyAccountExist(accountNumber);
});