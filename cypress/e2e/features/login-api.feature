Feature: Registration & Login via REST API


  Scenario: API Registration
    Given a registration request body
    When i send POST request to api/Users
    Then i get response code 201

  Scenario: API Login
    Given a login request body
    When i send POST request to rest/user/login/
    Then i get response code 200
