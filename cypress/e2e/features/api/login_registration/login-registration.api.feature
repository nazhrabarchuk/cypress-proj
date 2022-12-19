Feature: Registration & Login via REST API


  Scenario: API Registration
    Given a registration request body
    When i set POST request to api/Users
    Then i receive valid Response with status code 201

  Scenario: API Login
    Given a login request body
    When i set POST request to rest/user/login/
    Then i receive valid Response with status code 200
