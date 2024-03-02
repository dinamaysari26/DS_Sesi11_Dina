@digital-skola @login
Feature: Swag Labs - Login - Negative

  @negative
  Scenario: As a locked_out_user, I should get error message 
    Given Dina is on the login page 
    When Dina login with "locked_out_user" credential 
    Then Dina should see error "Epic sadface: Sorry, this user has been locked out."

  Scenario: As a problem_user, i should login and get dogs image
    Given Dina is on the login page
    When Dina login with "problem_user" credential
    Then Dina should see home page
    And Dina should see dogs image
