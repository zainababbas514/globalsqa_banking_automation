Feature: Manager Open Account

    Background:
        Given the user is logged in as a Manager
        And the user is on the Manager dashboard

    Scenario: Verify Open Account functionality
        When the user clicks the "Open Account" button
        And the user selects the customer "Hermoine Granger"
        And the user selects the currency "Dollar"
        And the user clicks the Process button
        Then the account should exist in the customers table
