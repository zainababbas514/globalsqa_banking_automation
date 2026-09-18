Feature: Manager Add Customer

    Background:
        Given the user is logged in as a Manager
        And the user is on the Manager dashboard

    Scenario: Add a new customer successfully
        When the user clicks the "Add Customer" button
        And the user enters the following customer details:
            | First Name | Last Name | Post Code |
            | John       | Doe       | 12345     |
        And the user clicks the Add Customer button
        Then the customer should exist in the Customers table