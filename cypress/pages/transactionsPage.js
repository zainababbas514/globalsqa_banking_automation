import BasePage from "./basePage";

class TransactionsPage extends BasePage {

    elements = {
        transactionsTable: () => cy.get("table.table-bordered"),
        transactionRows: () => cy.get("tbody tr[id*='anchor']"),
        resetButton: () => cy.get("button[ng-click='reset()']")
    };

    getTransactionRows() {
        return this.elements.transactionRows();
    }

    clickResetButton() {
        this.clickElement(this.elements.resetButton);
    }
}

export default TransactionsPage;