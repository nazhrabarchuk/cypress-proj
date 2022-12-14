Feature: Basket Action via API

  @api-register-login
  Scenario: Add product to basket with API methods
    Given a GET basket body
    When i send POST request with basket body
    Then i get "Basket" response code 200
