Feature: Change User info

  As a logged user
  I want to change profile information

  @api-register-login
  Scenario Outline: Change profile information
    Given I am on Home Page
    When I open my profile page
    And I set "<username>" into username
    And I set "<imgUrl>" to new profile image
    Then Profile image should be updated and name username is equal "<username>"


    Examples:
      | username         | imgUrl                                         |
      | Updated Username | https://www.w3schools.com/howto/img_avatar.png |
