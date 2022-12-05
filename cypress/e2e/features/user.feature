Feature: Change User info

  As a logged user
  I want to change profile information

  @api-register-login
  Scenario Outline: Change profile information
    Given the product store home page is displayed
    When the user navigates to profile page
    And the user set "<username>" into username input
    And the user uploads a new profile image
    Then the profile image should be updated and name username is equal "<username>"


    Examples:
      | username         |
      | Updated Username |
