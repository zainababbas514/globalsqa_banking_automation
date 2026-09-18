Feature: Customer Transactions

    Background:
        Given the user is logged in as a customer
        And the user is on the dashboard

    Scenario: Verify transaction history is displayed
        Given the user has performed a transaction
        When the user clicks on the "Transactions" tab
        Then transaction records should be displayed

    Scenario: Verify transaction reset functionality
        Given the user has performed a transaction
        When the user clicks on the "Transactions" tab
        And the user clicks the Reset button
        Then the transaction table should be empty