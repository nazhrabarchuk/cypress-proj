Feature: Leave feedback via REST API

  @api-register-login
  Scenario: Leave feedback with rate 3
    Given a GET captcha body
    When i send POST request with captcha body
      | url           | comment        | rating |
      | api/Feedbacks | !!!API test!!! | 3      |
    Then i get feedback response code 201
