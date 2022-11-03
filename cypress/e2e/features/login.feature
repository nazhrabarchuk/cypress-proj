Feature: Login Action

  As a valid user
  I want to log in into Application

  Scenario: Successful Login with Valid Credentials
    Given I am on Home Page
    When I Navigate to Login Page
    And I enter "username" and "password"
    And I click on sign in login
    Then I should see homepage
