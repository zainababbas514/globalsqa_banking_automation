import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

import TransactionsPage from "../../../pages/transactionsPage";

const transactionsPage = new TransactionsPage();

Then("transaction records should be displayed", () => {
    transactionsPage.getTransactionRows()
        .should("have.length.greaterThan", 0);
});

When("the user clicks the Reset button", () => {
    transactionsPage.clickResetButton();
});

Then("the transaction table should be empty", () => {
    transactionsPage.getTransactionRows()
        .should("have.length", 0);
});