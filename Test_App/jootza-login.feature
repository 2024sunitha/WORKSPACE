Feature: As a jootza user, I want to be able to login to my accoutn so that I can access my account


@jootzaLogin @jootzaLoginError
Scenario: Customer sees the error message
Given I am on the jootza.com login page
When I enter the username in the username input
And I enter password
And I click on Login button
Then I see error messages

@JootzaLogin @jootzaEmailError
Scenario: Customer logs in with invalid credentials
Given I am on the jotza.com login page
When I enter invalid email in the username input
Then I should see an error messages

Scenario: Customer logs in with valid credentials
Given I am on the jotza.com login page
When I enter invalid password in the password input 
And enter an valid email in the uername input
And I click on the login button
Then I should  be redirected to the home page