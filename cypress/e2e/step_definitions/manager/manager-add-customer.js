import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ManagerDashboard from "../../../pages/managerDashboard";

const managerDashboard = new ManagerDashboard();
let customerData;


// Scenario: Verify Add Customer functionality

When("the user enters the following customer details:", (dataTable) => {
    customerData = dataTable.hashes()[0];

    managerDashboard.enterField(
        managerDashboard.elements.firstNameInput,
        customerData["First Name"]
    );

    managerDashboard.enterField(
        managerDashboard.elements.lastNameInput,
        customerData["Last Name"]
    );

    managerDashboard.enterField(
        managerDashboard.elements.postalCodeInput,
        customerData["Post Code"]
    );
});


Then("the user clicks the Add Customer button", () => {
    cy.on("window:alert", (alertText) => {
        expect(alertText).to.contain("Customer added successfully");
    });

    managerDashboard.clickSubmitButton();
});


Then("the customer should exist in the Customers table", () => {
    managerDashboard.clickTab(
        managerDashboard.elements.customersTab
    );

    cy.contains("tr", customerData["First Name"])
        .should("contain", customerData["Last Name"])
        .and("contain", customerData["Post Code"]);
});