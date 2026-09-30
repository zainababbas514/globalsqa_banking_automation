import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import ManagerDashboard from "../../../pages/managerDashboard";

const managerDashboard = new ManagerDashboard();

Given("the following customer exists in the system:", (dataTable) => {
    customerData = dataTable.hashes()[0];

    managerDashboard.clickTab(
        managerDashboard.elements.addCustomerTab
    );

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

    managerDashboard.clickSubmitButton();
});

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

When('the user deletes the customer {string} with post code {string}', (customerName, postCode) => {
    const [firstName, lastName] = customerName.split(" ");

    managerDashboard.deleteCustomerByDetails(
        firstName,
        lastName,
        postCode
    );
});

Then('the customer {string} with post code {string} should no longer be in the list', (customerName, postCode) => {
    managerDashboard.getCustomerRows()
        .filter((row) => {
            const [firstName, lastName] = customerName.split(" ");
            const rowText = Cypress.$(row).text();

            return rowText.includes(firstName) &&
                rowText.includes(lastName) &&
                rowText.includes(postCode);
        })
        .should("not.exist");

});
