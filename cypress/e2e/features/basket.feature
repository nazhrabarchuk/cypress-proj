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


  @api-login
  Scenario: Purchase flow
    And I click checkout button
    And I click add new Address button
    And I set "country", "name", "1234567", "zip", "address", "city", "state" into new Address for delivery
    And I click submit Address form
    And I choose Address
    And  I click continue button
    And I choose delivery speed and click continue button
    And  I click continue button
    And I click add new payment card
    And I set "cardName", "1234567891234567", "5", "2080" into Payment card form
    And I click submit Payment form
    And I choose payment card
    And I click continue button
    And I click complete purchase button
    Then I see successful purchase message "Thank you for your purchase!"
