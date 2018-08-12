'use strict';

let I;

module.exports = {

  _init() {
    I = require('../steps_file.js')();
  },

  // setting locators
  fields: {
    salutation: {xpath: '//label[contains(@for, "gender")]/..//*[contains(@class, "has-value")]'},
    first_name: {xpath: '//input[@id="first_name"]'},
    last_name: {xpath: '//input[@id="last_name"]'},
    email: {xpath: '//input[@type="email"]'},
    password: {xpath: '//input[@type="password"]'},
  },

  // fill out form
  fillForm(
    salutation,
    first_name,
    last_name,
    email,
    password,
  ) {

    // select salutation
    I.selectDropdownField(this.fields.salutation, salutation);
    
    // enter first name
    I.fillField(this.fields.first_name, first_name);

    // enter last name
    I.fillField(this.fields.last_name, last_name);

    // enter email
    I.fillField(this.fields.email, email);

    // enter password
    I.fillField(this.fields.password, password);

  },

}
