Feature: Leave customer feedback

  As a logged user
  I want to leave feedback with rating 3

  @api-register-login
  Scenario: Leave feedback with rating 3
    Given I am on Home Page
    When I navigate to Customer Feedback page
    And I fill Feedback form with "Test comment"
    And I click submit Feedback form
    Then I should see a successfully message "Thank you for your feedback."


