import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import LoginPage from "../../pages/login";
import CustomerDashboard from "../../pages/customerDashboard";
import ManagerDashboard from "../../pages/managerDashboard";

const loginPage = new LoginPage();
const customerDashboard = new CustomerDashboard();
const managerDashboard = new ManagerDashboard();


beforeEach(() => {
    cy.visit("/");
});


Given("the user is logged in as a Manager", () => {
    loginPage.clickManagerLoginButton();
});


Given("the user is on the Manager dashboard", () => {
    cy.url().should("include", "manager");
});


Given("the user is logged in as a customer", () => {
    loginPage.customerLogin("Hermoine Granger");
});


Given("the user is on the dashboard", () => {
    customerDashboard.verifyLoggedInUser("Hermoine Granger");
});


Given("the user has performed a transaction", () => {
    customerDashboard.clickTab(
        customerDashboard.elements.depositTabButton
    );

    customerDashboard.enterField(
        customerDashboard.elements.depositInput,
        500
    );

    customerDashboard.clickDepositSubmitButton();
});


Then("the account balance should remain the same", () => {
    cy.get("@accountBalance").then(balance => {
        customerDashboard
            .getAccountBalance()
            .should("equal", balance);
    });
});


// ==================== CUSTOMER TABS ====================

When("the user clicks on the {string} tab", (tabName) => {

    const choice = tabName.toLowerCase();


    if (choice === "transactions") {

        customerDashboard.clickTab(
            customerDashboard.elements.transactionsButton
        );


    } else if (choice === "deposit") {

        customerDashboard.getAccountBalance().as("accountBalance");

        customerDashboard.clickTab(
            customerDashboard.elements.depositTabButton
        );

        customerDashboard.verifyDepositFormDisplayed();


    } else if (choice === "withdrawl") {

        customerDashboard.getAccountBalance().as("accountBalance");

        customerDashboard.clickTab(
            customerDashboard.elements.withdrawTabButton
        );


    } else {

        throw new Error(
            `Tab "${tabName}" is not defined on customerDashboard.`
        );

    }
});


// ==================== MANAGER BUTTONS ====================

When("the user clicks the {string} button", (tabName) => {

    if (tabName === "Add Customer") {

        managerDashboard.clickTab(
            managerDashboard.elements.addCustomerTab
        );

        managerDashboard.verifyAddCustomerFormDisplayed();


    } else if (tabName === "Customers") {

        managerDashboard.clickTab(
            managerDashboard.elements.customersTab
        );

        managerDashboard.verifyCustomersTableDisplayed();


    } else if (tabName === "Open Account") {

        managerDashboard.clickTab(
            managerDashboard.elements.openAccountTab
        );

        managerDashboard.verifyOpenAccountFormDisplayed();


    } else {

        throw new Error(
            `Tab "${tabName}" is not defined on managerDashboard.`
        );

    }
});