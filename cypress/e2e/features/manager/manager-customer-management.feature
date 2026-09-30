Feature: Manager Customer Management

    Background:
        Given the user is logged in as a Manager
        And the user is on the Manager dashboard

    Scenario Outline: Search for customers using different criteria
        When the user clicks the "Customers" button
        And the user enters "<searchText>" in the search field
        Then matching customer records should be displayed for "<searchText>"

        Examples:
            | searchText |
            | Harry      |
            | E55555     |
            | 1006       |

    Scenario: Delete an existing customer successfully
        Given the following customer exists in the system:
            | First Name | Last Name | Post Code |
            | Jason      | Peter     | E78H47    |
        When the user clicks the "Customers" button
        And the user deletes the customer "Jason Peter" with post code "E78H47"
        Then the customer "Jason Peter" with post code "E78H47" should no longer be in the list