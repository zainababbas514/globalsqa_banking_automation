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

    Scenario: Delete a customer successfully
        When the user clicks the "Customers" button
        And the user deletes the customer with account number "1005"
        Then the customer with account number "1005" should be removed from the list