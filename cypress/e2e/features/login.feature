Feature: Login to Application

  As a valid user
  I want to log in into Application

  Scenario: Valid Login
    Given I open login page
    When I enter username and password
    And I click on sign in login
    Then I should see homepage
