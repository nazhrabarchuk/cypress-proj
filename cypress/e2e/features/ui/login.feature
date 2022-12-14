Feature: Login Action

  As a invalid user
  I cannot log into application
  As a valid user
  I want to log in into Application

  Scenario: Invalid Login
    Given the product store home page is displayed
    When the user navigates to login page
    When the user fill login form with incorrect cred
      | email       | password       |
      | wrong email | wrong_password |
    Then the error login message "Invalid email or password" is shown

  @api-registration
  Scenario: Successful Login with Valid Credentials
    Given the product store home page is displayed
    When the user navigates to login page
    And the user fill login form with valid credentials
    Then the basket button is displayed on the homepage


