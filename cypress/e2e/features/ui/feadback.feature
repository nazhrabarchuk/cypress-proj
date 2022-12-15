Feature: Leave customer feedback

  As a logged user
  I want to leave feedback with rating 3

  @api-register-login
  Scenario: Leave feedback with rating 3
    Given the product store home page is displayed
    When the user navigates to Customer Feedback page
    And the user fill and submit Feedback form with title "Test comment"
    Then the message "Thank you for your feedback." should be displayed on the screen


