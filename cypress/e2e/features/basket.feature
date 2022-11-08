Feature: Basket Action

  As a logged user
  I want to add a product to the cart and remove it from there
  I want to complete purchase flow


  @register-and-login-into-app
  Scenario: Add\remove item to basket
    Given I am on Home Page
    When I add to basket product with index "1"
    And I click basket button
    And Basket shouldn't be empty
    And I click remove item from basket button
    Then Basket should be empty
