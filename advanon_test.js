/// <reference path="./steps.d.ts" />

// define data table
let accounts = new DataTable([
    'country_name',
    'salutation',
    'first_name',
    'last_name',
    'email',
    'password',
    'address',
    'postal_code',
    'city'
  ]); //
  
  // add record to table
  accounts.add([
    'Switzerland',
    'Mr.', 
    'Maciej', 
    'Kocol',
    'qa-home-assignment@maciejkocol.com',
    'homeTest101',
    '1 Park Ave',
    '8000',
    'Zürich'
  ]);
  
  Feature('Create Investor Account');

  Scenario('create account', (I) => {
    I.amOnPage('/');
    I.seeInTitle("Advanon");
    I.click('Create an account')
    I.see('Grow to your full potential');
  });
  
  Scenario('sign up as investor', (I) => {
    I.seeInCurrentUrl('/accounts/seller/sign_up');
    I.click('Sign up as investor');
    I.see('Sign in');
  });

  Scenario('create an investor account', (I) => {
    I.seeInCurrentUrl('https://alpha.advanon.com/');
    I.click('Create an Investor account');
    I.see("Create your account");
    I.see('Is Advanon for me?');
  });

  Scenario('view requirements', (I) => {
    I.seeInCurrentUrl('/investor/signup/form');
    I.click("Minimum requirements");
    I.waitForText("Minimum requirements for using Advanon");
    I.see("Minimum requirements for using Advanon");
    I.click("Ok, I understand");
    I.dontSee('Is Advanon for me?');
  });
  
  Data(accounts).Scenario('submit signup form', (I, signupFormPage, current) => {
    I.seeInCurrentUrl('/investor/signup/form');
    signupFormPage.fillForm(
      current.salutation,
      current.first_name,
      current.last_name,
      current.email,
      current.password
    );
    I.submitForm();
    I.waitForText("Welcome");
    I.see('Welcome ' + current.salutation + ' ' + current.last_name);
  });

  Data(accounts).Scenario('submit address form', (I, addressFormPage, current) => {
    I.seeInCurrentUrl('/investor/signup/address');
    addressFormPage.fillForm(
      current.country_name,
      current.address,
      current.postal_code,
      current.city
    );
    I.submitForm();
    I.see("Dashboard");
  });

  Data(accounts).Scenario('view profile settings', (I, dashboardPage, current) => {
    I.seeInCurrentUrl('/verification/legal_form');
    dashboardPage.viewProfile();
    I.see("BANK + CONTRACTS");
  });

  Data(accounts).Scenario('view bank info', (I, current) => {
    I.seeInCurrentUrl('/profile');
    I.click("bank + contracts");
    // unable to update disabled IBAN fields
  });
  
  Feature('Sign In');
  
  Before((I) => {
    I.amOnPage('/');
    I.seeInTitle('Advanon');
  });
  
  xData(accounts).Scenario('test login', (I, current) => {
    I.login(current.email, current.password);
    I.see('Dashboard');
    I.dontSeeInCurrentUrl('/');
  });
  