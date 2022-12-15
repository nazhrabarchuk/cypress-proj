Feature: Sold-out Action


  @api-register-login
  Scenario: Buying last items and checking if items are marked as sold-out
    Given the product store home page is displayed
    When the user goes to the last page of product list
    And the user adds the last item to the cart
    And the user sets max quantity of product in basket
    And the user complete purchase with successfully message "Thank you for your purchase!"
    And the user goes to the last page of product list
    Then the last product item contains the mark "Sold Out"
