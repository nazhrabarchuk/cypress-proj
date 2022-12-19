Feature: Negative API: Basket remove items


  @api-register-login
  Scenario: Return 404 when try to remove undefined item from basket
    Given i set DELETE method for undefined item with id 101 from the basket
    Then a response should contain a Not Found message with status 404
