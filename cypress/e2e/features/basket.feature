Feature: Basket Action

  As a logged user
  I want to add a product to the cart and remove it from there
  I want to complete purchase flow

  Background:
    Given I am on Home Page
    When I add to basket product with index "1"
    And I click basket button

  @api-register-login
  Scenario: Add\remove item to basket
    And Basket shouldn't be empty
    And I click remove item from basket button
    Then Basket should be empty

  @focus
  @api-register-login
#  @api-login
  Scenario: Purchase flow
    And I click checkout button
    And I set new Address for delivery and click continue
