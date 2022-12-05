Feature: Basket Action

  As a logged user
  I want to add a product to the cart and remove it from there
  I want to complete purchase flow

#  Background:
#    Given the product store home page is displayed
#    When I add to basket product with index "1"
#    And I click basket button

  @api-register-login
  Scenario: Add\remove item to basket
#    And Basket shouldn't be empty
#    And I click remove item from basket button
#    Then Basket should be empty
###
    Given the product store home page is displayed
    When the user adds a product with the index "1" to the cart
    And the user removes the product from the cart
    ##fix
    Then the cart should be empty

  @api-login
  Scenario: Purchase flow
#    And I click checkout button
#    And I click add new Address button
#    And I set creds into new Address for delivery
#      | country | name | mobileNumber | zip | address | city | state |
#      | Country | Name | 1234567      | zip | Address | City | State |
#    And I click submit Address form
#    And I choose Address
#    And  I click continue button
#    And I choose delivery speed and click continue button
#    And  I click continue button
#    And I click add new payment card
#    And I set creds into Payment card form
#      | name      | cardNumber       | month | year |
#      | Card Name | 1234567891234567 | 5     | 2080 |
#    And I click submit Payment form
#    And I choose payment card
#    And I click continue button
#    And I click complete purchase button
#    Then I see successful purchase message "Thank you for your purchase!"
    ####
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
