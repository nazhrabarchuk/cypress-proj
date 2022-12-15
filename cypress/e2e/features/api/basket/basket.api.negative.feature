Feature: Negative API: Basket remove items


  @api-register-login
  Scenario: Return 404 when try to remove undefined item from basket
    Given a DELETE method for undefined item with id 101 from the basket
    Then a response should contain a message Not Found with status 404
