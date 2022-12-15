Feature: Basket Action

  As a logged user
  I want to add a product to the cart and remove it from there
  I want to complete purchase flow

  @api-register-login
  Scenario: Add\remove item to basket
    Given the product store home page is displayed
    When the user adds a product with the index "1" to the cart
    And the user removes the product from the cart
    Then the cart should be empty

  @api-login
  Scenario: Purchase flow
    Given the product store home page is displayed
    When the user adds a product with the index "1" to the cart
    And the user wants to purchase the product
    And the user adds a new delivery Address and choose them
      | country | name | mobileNumber | zip | address | city | state |
      | Country | Name | 1234567      | zip | Address | City | State |
    And the user choose delivery speed
    And the user adds a new payment card and choose them
      | name      | cardNumber       | month | year |
      | Card Name | 1234567891234567 | 5     | 2080 |
    And the user submit purchase
    Then the message "Thank you for your purchase!" is shown on the page
