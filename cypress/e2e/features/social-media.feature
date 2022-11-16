Feature: Opening any social media from “About Us” page

  Scenario: Open Facebook page from "About US" page
    Given I am on Home Page
    When I navigate to About Us page
    And I click social Facebook button
    Then I should see Facebook page with title "OWASP Juice Shop"
