'use strict';

let I;

module.exports = {

  _init() {
    I = require('../steps_file.js')();
  },

  // setting locators
  fields: {
    address: {xpath: '//input[@name="address"]'},
    postal_code: {xpath: '//input[@name="postal-code"]'},
    city: {xpath: '//input[@name="city"]'}
  },

  // fill out form
  fillForm(
    country_name,
    address,
    postal_code,
    city
  ) {
    
    // select country
    I.click('//button[text()="' + country_name + '"]');
    
    // enter address
    I.fillField(this.fields.address, address);

    // enter postal code
    I.fillField(this.fields.postal_code, postal_code);

    // enter city
    I.fillField(this.fields.city, city);

  },

}
