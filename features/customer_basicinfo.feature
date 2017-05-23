Feature: Get Quote
  As a customer
  I want to get a quote
  So that I can know if i can begin an application

  Scenario: Get MRT Quote
    Given I navigate to "http://qa.oea.metlifetermlife.com/MRT"
    And use the following data      
      | a3z.person.Address.State     | AL    |
      | a3z.person.DateOfBirth.Month | 3     |
      | a3z.person.DateOfBirth.Day   | 20    |
      | a3z.person.DateOfBirth.Year  | 1970  |
      | a3z.person.Gender            | M     | 
      | a3z.data.tobacco             | No    |
      | a3z.data.Term                | 15    |
      | a3z.data.FaceAmount          | 50000 |    
    When I click on Get My Quote with id "btnGetQuote"
    Then I should see a coverage with id "CoverageResultPrice"