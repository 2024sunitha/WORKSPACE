Feature: As a Indigo user,i want to able to access my account
so that i can access my account
@Indigologin @IndigologinError @234
Scenario: Customer sees the error message
Given I am on the Indigo.com login page
when i enter the username in the username input
and i click on login button 
then I see error messages



@Indigologin
Scenario: Customer logs in with invalid credentials
Given I am on the Indigo.com login page
When i enter invalid email in the username input
And i click on the login button
Then i should see an error messages


Scenario: Customer logs in with valid credentials
Given I am on the Indigo.com login page
When I enter invalid password in the password input
And enter an valid email in the username input
And I click on the login button
Then I should be redirected to the home page

