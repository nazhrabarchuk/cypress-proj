Feature: Basket Action via API

  @api-register-login
  Scenario: Add product to basket with API methods
    Given i set GET request for basket body
    When i set POST request with basket body
      | url              | productId | quantity |
      | api/BasketItems/ | 1         | 1        |
    Then i receive valid "Basket" Response with status code 200



