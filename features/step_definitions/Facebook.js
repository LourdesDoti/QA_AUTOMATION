const { Given, When, Then } = require('cucumber');
const {Builder, By, Key, until} = require('selenium-webdriver');
require('chromedriver');
var webdriver = require('selenium-webdriver');
var driver;

Given('Quiero ir a la pagina de facebook',async function () {
    this.driver =  new webdriver.Builder()
    .forBrowser('chrome')
    .build();
    this.driver.get('http://www.facebook.com.ar');
});

  
When('mandar una solicitud de amistad', function () {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});

When('publicar un estado', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });
Then('verificar que la solicitud se haya mandado', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('verificar que estemos en la pagina de facebook', async function () {
    var titulo = await this.driver.getTitle();
    console.log ('El titulo es ', titulo);
});
  Then('verificar que el estado se haya publicado', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });