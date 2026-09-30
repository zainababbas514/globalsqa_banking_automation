import BasePage from "./basePage";

class ManagerDashboard extends BasePage {

    elements = {
        // Navigation
        addCustomerTab: () => cy.get("button[ng-click='addCust()']"),
        openAccountTab: () => cy.get("button[ng-click='openAccount()']"),
        customersTab: () => cy.get("button[ng-click='showCust()']"),

        // Forms
        addCustomerForm: () => cy.get("form[ng-submit='addCustomer()']"),
        openAccountForm: () => cy.get("form[ng-submit='process()']"),

        // Add Customer
        firstNameInput: () => cy.get("input[ng-model='fName']"),
        lastNameInput: () => cy.get("input[ng-model='lName']"),
        postalCodeInput: () => cy.get("input[ng-model='postCd']"),

        // Open Account
        customerDropdown: () => cy.get("#userSelect"),
        currencyDropdown: () => cy.get("#currency"),

        // Customers
        customersTable: () => cy.get("table.table-bordered"),
        customerSearchInput: () => cy.get("input[ng-model='searchCustomer']"),

        // Common
        submitButton: () => cy.get("button[type='submit']")
    };


    // Navigation

    clickTab(tab) {
        this.clickElement(tab);
    }


    // Form Verification

    verifyAddCustomerFormDisplayed() {
        this.verifyElementVisible(this.elements.addCustomerForm);
    }

    verifyOpenAccountFormDisplayed() {
        this.verifyElementVisible(this.elements.openAccountForm);
    }

    verifyCustomersTableDisplayed() {
        this.verifyElementVisible(this.elements.customersTable);

        this.elements.customersTable()
            .find("thead")
            .should("be.visible");

        this.elements.customersTable()
            .find("tbody tr")
            .should("have.length.greaterThan", 0);
    }


    // Form

    enterField(field, value) {
        this.enterText(field, value);
    }


    clickSubmitButton() {
        this.clickElement(this.elements.submitButton);
    }


    // Open Account

    selectCustomer(customerName) {
        this.selectOption(
            this.elements.customerDropdown,
            customerName
        );
    }

    selectCurrency(currency) {
        this.selectOption(
            this.elements.currencyDropdown,
            currency
        );
    }


    // Customer Management

    getCustomerRows() {
        return this.elements.customersTable()
            .find("tbody tr");
    }

    deleteCustomerByDetails(firstName, lastName, postCode) {

        this.getCustomerRows().each(($row) => {

            const rowText = $row.text();

            if (
                rowText.includes(firstName) &&
                rowText.includes(lastName) &&
                rowText.includes(postCode)
            ) {
                cy.wrap($row)
                    .within(() => {
                        cy.contains("button", "Delete").click();
                    });

                return false;
            }
        });
    }


    // Account

    verifyAccountExist(accountNumber) {
        this.elements.customersTable()
            .find("tbody tr")
            .should("contain", accountNumber);
    }
}

export default ManagerDashboard;