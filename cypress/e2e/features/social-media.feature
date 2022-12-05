Feature: Opening any social media from “About Us” page

  Scenario: Open Facebook page from "About US" page
    Given the product store home page is displayed
    When the user navigates to About Us page
    And the user select Facebook social-media link
    Then the Facebook page with title "OWASP Juice Shop" is displayed
