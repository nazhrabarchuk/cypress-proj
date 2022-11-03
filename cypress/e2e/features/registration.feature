Feature: Registration on the Application

  As a guest
  I want to register on the Application

  Scenario: Valid Registration:
    Given I open registration page
    When I fill the registration form with valid creds
    And I click on submit button
    Then I should see Login page

  Scenario: Invalid Registration:
    Given I open registration page

