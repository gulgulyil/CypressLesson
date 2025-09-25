Feature: Amazon product search

  Background:
    Given the Amazon homepage is opened
    And cookies are accepted

  Scenario: Search for Alcatel product
    When the search box is filled with "alcatel 20196" and Enter is pressed
    Then at least 4 results should be listed
