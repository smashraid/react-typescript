Feature: Get Quote
  As a customer
  I want to get a quote
  So that I can know if i can begin an application

  Background:
    Given I navigate to "http://qa.oea.metlifetermlife.com/MRT"
    And use the following data      
      | a3z.person.Address.State     | AL    | select |
      | a3z.person.DateOfBirth.Month | 3     | select |
      | a3z.person.DateOfBirth.Day   | 20    | select |
      | a3z.person.DateOfBirth.Year  | 1970  | select |
      | a3z.person.Gender            | M     | select |
      | a3z.data.tobacco             | No    | select |
      | a3z.data.Term                | 15    | select |
      | a3z.data.FaceAmount          | 50000 | select |
    And I click on Get My Quote with id "btnGetQuote"
    And I click on Begin your Application with id "BtnBeginQuote"

  #Scenario: Basic Information
    #Given I fill basic info form with the following data
      #| a3z.person.FirstName     | Alonso                 | input  |
      #| a3z.person.LastName      | Jones                  | input  |
      #| a3z.data.MailAddressLine | 917 Strother Street    | input  |
      #| a3z.data.MailAddressCity | Oakman                 | input  |
      #| a3z.data.MailAddressZip  | 35579                  | input  |
      #| a3z.data.PlaceBirth      | India                  | input  |
      #| a3z.person.EmailAddress  | alonso.jones@test.com  | input  |
      #| phone-1                  | 205-622-5966           | input  |    
      #| phoneType-1              | Home                   | select |
    #When i click on continue
    #Then i will see address validation message

  Scenario: Identification
    Given I fill basic info form with the following data
      | a3z.person.FirstName     | Alonso                 | input  |
      | a3z.person.LastName      | Jones                  | input  |
      | a3z.data.MailAddressLine | 917 Strother Street    | input  |
      | a3z.data.MailAddressCity | Oakman                 | input  |
      | a3z.data.MailAddressZip  | 35579                  | input  |
      | a3z.data.PlaceBirth      | India                  | input  |
      | a3z.person.EmailAddress  | alonso.jones@test.com  | input  |
      | phone-1                  | 205-622-5966           | input  |    
      | phoneType-1              | Home                   | select |
    When i click on continue    
    When i click on continue again
    When i fill identification form with the following data
      | SSNumFaux | 417318810 | input |    
    Then i will see "MNoticeConsentBox" modal
    