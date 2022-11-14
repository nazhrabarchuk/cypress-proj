Feature: Sold-out Action

  @api-register-login
  Scenario: Buying last items and checking if items are marked as sold-out
    Given I am on Home Page
    When I go to last page with products and click last item
    And I click basket button
    And I set max count of product and get message "We are out of stock! Sorry for the inconvenience."
