Feature: Leave feedback via REST API

  @api-register-login
  Scenario: Leaving feedback with rate 3
    Given  i set GET request for captcha body
    When i send POST request with captcha body
      | url           | comment        | rating |
      | api/Feedbacks | !!!API test!!! | 3      |
    Then i receive valid "Feedback" Response with status code 200

