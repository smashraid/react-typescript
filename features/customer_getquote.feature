Feature: Get Quote
  As a customer
  I want to get a quote
  So that I can know if i can begin an application

  Scenario: Get MRT Quote
    Given I navigate to "http://qa.oea.metlifetermlife.com/MRT"
    And I select state with value "AL" and name "a3z.person.Address.State"
    And I select month with value "3" and name "a3z.person.DateOfBirth.Month"
    And I select day with value "20" and name "a3z.person.DateOfBirth.Day"
    And I select year with value "1970" and name "a3z.person.DateOfBirth.Year"
    #And I wait for "10" sec
    And I select gender with value "M"  and name "a3z.person.Gender"
    And I select tobacco with value "No" and name "a3z.data.tobacco"        
    And I select term with value "15" and name "a3z.data.Term"
    And I select amount with value "50000" and name "a3z.data.FaceAmount"
    When I click on Get My Quote with id "btnGetQuote"
    Then I should see a coverage