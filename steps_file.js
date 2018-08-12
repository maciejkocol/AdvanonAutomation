
'use strict';
// in this file you can append custom step methods to 'I' object

module.exports = function() {

  return actor({

    fields: {
      email: 'signin-form-email',
      password: 'password'
    },
    buttons: {
      submitButton: {xpath: '//button[@type="submit" and not(@disabled)]//*[text()="Next" or text()="Sign up"]'},
    },

    // login
    login: function(email, password) {
      this.fillField(this.fields.email, email);this.
      this.fillField(this.fields.password, password);
      this.click(this.loginButton);
    },

    // select from autocomplete
    selectAutocompleteField: function(select, option) {
      this.waitForElement(select);
      this.waitForEnabled(select);
      this.waitForVisible(select);
      this.wait(1);
      this.click(select);
      this.fillField(select.xpath + '//input', option);
      this.waitForText(option, 5);
      this.click({xpath: select.xpath + "//div[@class='Select-menu-outer']//*[text()='" + option + "']"});
    },

    // select from dropdown
    selectDropdownField: function(select, option) {
      this.waitForElement(select);
      this.waitForEnabled(select);
      this.waitForVisible(select);
      this.wait(1);
      this.click(select);
      this.click({xpath: select.xpath + "//*[text()='" + option + "']"});
    },

    // submit form
    submitForm() {
      this.waitForElement(this.buttons.submitButton, 10);
      this.wait(1);
      this.click(this.buttons.submitButton);
      this.wait(1);
      this.waitForInvisible(this.buttons.submitButton, 20);
    },

  });
}
