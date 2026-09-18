Feature: Customer Withdrawal

    Background:
        Given the user is logged in as a customer
        And the user is on the dashboard

    Scenario: Withdraw money with sufficient balance
        Given the account has sufficient balance for a withdrawal of 200
        When the user clicks on the "Withdrawl" tab
        And the user enters 200 as withdrawal amount
        And the user clicks the Withdraw button
        Then a withdrawal success message should be displayed
        And the account balance should be reduced by 200

    Scenario: Withdraw money with insufficient balance
        When the user clicks on the "Withdrawl" tab
        And the user enters 200000 as withdrawal amount
        And the user clicks the Withdraw button
        Then a withdrawal error message should be displayed
        And the account balance should remain the same