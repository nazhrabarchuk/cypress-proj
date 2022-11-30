Feature: Sold-out Action

  @api-register-login
  Scenario: Buying last items and checking if items are marked as sold-out
    Given I am on Home Page
    When I go to last page with products
    And I add to basket last product item
    And I click basket button
    And I set max count of product
    And I click checkout button
    And I complete basket purchase flow with successfully message "Thank you for your purchase!" and go to mainPage
    And I go to last page with products
    Then Last product item contain the mark "Sold Out"
