const { Given, When, Then } = require('cucumber');
const { Builder, By, Key, until } = require('selenium-webdriver');
const { assert } = require('chai');
require('chromedriver');
var webdriver = require('selenium-webdriver');
var driver;
var {setDefaultTimeout} = require('cucumber');



Given('Quiero ir a la pagina de trello', function () {

    setDefaultTimeout(60 * 1000);
    this.driver = new webdriver.Builder()
        .forBrowser('chrome')
        .build();
    this.driver.get('http://www.trello.com');
});

Then('verificar que estamos en la pagina de trello', async function () {
    
    var titulo = await this.driver.getTitle();
    var url = await this.driver.getCurrentUrl();
    await assert( url === 'https://trello.com/', 'url actual: ' + url + 'La url esperada es: https://trello.com/' );
    await assert( titulo === 'Trello', 'Titulo actual: '+ titulo + ' Titulo esperado:Trello');
});