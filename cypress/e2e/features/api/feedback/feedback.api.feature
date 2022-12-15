Feature: Leave feedback via REST API

  @api-register-login
  Scenario: Leaving feedback with rate 3
    Given a GET captcha body
    When i send POST request with captcha body
      | url           | comment        | rating |
      | api/Feedbacks | !!!API test!!! | 3      |
    Then i get "Feedback" response code 201

