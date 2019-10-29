const { Given, When, Then } = require('cucumber');
const { Builder, By, Key, until } = require('selenium-webdriver');
const { assert } = require('chai');
require('chromedriver');
var webdriver = require('selenium-webdriver');
var driver;
var {setDefaultTimeout} = require('cucumber');

Given('Quiero ir a la pagina de twitter',  function () {
    
    setDefaultTimeout(60 * 1000);
    this.driver = new webdriver.Builder()
        .forBrowser('chrome')
        .build();
    this.driver.get('http://www.twitter.com');
});

Then('verificar que la url de la pagina sea correcta', async function () {
    var url = await this.driver.getCurrentUrl();
    await assert( url === 'https://twitter.com/', 'url actual: ' + url + 'La url esperada es: https://twitter.com/' );
 
}); 
Then('verificar que el titulo de twitter es correcto', async function () {
    var titulo = await this.driver.getTitle();
    await assert( titulo === 'Twitter. Es lo que está pasando.', 'Titulo actual: '+ titulo + ' Titulo esperado: Twitter. Es lo que está pasando.');
});