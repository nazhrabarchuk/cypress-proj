Feature: Registration on the Application

  Background:
    Given I am on Home Page
    And I Navigate to Login Page
    And I click 'Not yet a customer' button

  Scenario: Valid Registration:
    When I fill the registration form with valid creds
    And I click submit button
    Then I should see successful registration message on Login page

  @focus
  Scenario Outline: Invalid Registration:
    When I enter "<email>", "<password>", "<password2>", "<securityQuestion>", "<securityAnswer>"
    Then I should see the "<msg>" on screen

    Examples:
      | email         | password | password2    | securityQuestion      | securityAnswer | msg                                    |
      | test          | testPass | testPass     | Mother's maiden name? | Mothers name   | Email address is not valid.            |
      | test@test.com | test     | test         | Mother's maiden name? | Mothers name   | Password must be 5-40 characters long. |
      | test@test.com | testPass | testPassword | Mother's maiden name? | Mothers name   | Passwords do not match                 |
