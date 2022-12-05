Feature: Registration on the Application

  Scenario: Valid Registration:
    Given the product store home page is displayed
    When the user navigates to login page
    And the user want to create an account
    And the user fill the registration form with valid credentials
    Then the message "Registration completed successfully. You can now log in." is shown on the login page

  Scenario Outline: Invalid Registration:
    Given the product store home page is displayed
    When the user navigates to login page
    And the user want to create an account
    And the user type "<email>", "<password>", "<password2>", "<securityQuestion>", "<securityAnswer>" into the registration form
    Then the message "<msg>" is displayed on the screen
    Examples:
      | email         | password | password2    | securityQuestion      | securityAnswer | msg                                    |
      | test          | testPass | testPass     | Mother's maiden name? | Mothers name   | Email address is not valid.            |
      | test@test.com | test     | test         | Mother's maiden name? | Mothers name   | Password must be 5-40 characters long. |
      | test@test.com | testPass | testPassword | Mother's maiden name? | Mothers name   | Passwords do not match                 |
