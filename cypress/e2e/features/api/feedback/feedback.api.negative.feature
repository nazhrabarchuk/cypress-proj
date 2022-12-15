Feature: Negative API: Leaving customer without captcha feedback


  @api-register-login
  Scenario: Negative API: Should return error status code when leave feedback without captcha
    Given a POST request with wrong captcha
      | url           | comment          | rating | captchaId | captchaAnswer |
      | api/Feedbacks | negative comment | 1      | -         | -             |
    Then should exist a response with error message and status
      | message                                    | status |
      | Wrong answer to CAPTCHA. Please try again. | 401    |
