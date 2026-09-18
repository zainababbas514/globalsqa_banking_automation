import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

import ManagerDashboard from "../../../pages/managerDashboard";

const managerDashboard = new ManagerDashboard();


// Customer Search

When("the user enters {string} in the search field", (searchText) => {
    managerDashboard.enterField(
        managerDashboard.elements.customerSearchInput,
        searchText
    );
});


Then("matching customer records should be displayed for {string}", (searchText) => {
    managerDashboard.getCustomerRows()
        .should("have.length.greaterThan", 0)
        .each(($row) => {
            cy.wrap($row)
                .invoke("text")
                .should("contain", searchText);
        });
});


// Customer Deletion

When("the user deletes the customer with account number {string}", (accountNumber) => {
    managerDashboard.deleteCustomerByAccountNumber(accountNumber);
});


Then("the customer with account number {string} should be removed from the list", (accountNumber) => {
    managerDashboard.getCustomerRows()
        .should("not.contain", accountNumber);
});