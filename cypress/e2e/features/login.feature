Feature: Login Action

  As a invalid user
  I cannot log into application
  As a valid user
  I want to log in into Application

  Background:
    Given I am on Home Page
    When I Navigate to Login Page

  Scenario: Invalid Login
    And I fill login form with "wrong_email" and "wrong_password"
    And I click on sign in login
    Then I should see error login message

  @api-registration
  Scenario: Successful Login with Valid Credentials
    And I fill login form with valid credentials
    And I click on sign in login
    Then I should see basket button on the homepage


