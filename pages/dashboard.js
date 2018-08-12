'use strict';

let I;

module.exports = {

  _init() {
    I = require('../steps_file.js')();
  },

  links: {
    profile_button: {xpath: '//button[@id="settings"]'},
    settings_link: {xpath: '//*[@class="dropdown-menu"]//*[contains(text(), "Settings")]'}
  },

  // go to settings
  viewProfile() {
    
    // click on profile
    I.click(this.links.profile_button);
    
    // select settings
    I.click(this.links.settings_link);

    // wait
    I.waitForInvisible(this.links.settings_link, 10);
  },

}

