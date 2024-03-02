@digital-skola @login
Feature: Swag Labs - Login - Positive

  @positeve 
  Scenario: As a standard_user, I want to log in successfully 
    Given Dina is on the login page 
    When Dina login with "standard_user" credential 
    Then Dina should see home page


