Feature: Registration on the Application

  As a user
  I want to register on the Application

  Scenario: Valid Registration:
    Given I am on Home Page
    When I Navigate to Login Page
    And I click 'Not yet a customer' button
    And I fill the registration form with valid creds
    And I click on submit button
    Then I should see successful registration message on Login page

#  Scenario: Invalid Registration:
#    Given I open registration page

