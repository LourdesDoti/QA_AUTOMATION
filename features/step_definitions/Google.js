const { Given, When, Then } = require('cucumber');
const {Builder, By, Key, until} = require('selenium-webdriver');
require('chromedriver');
var webdriver = require('selenium-webdriver');
var driver;


Given('Quiero ir a la pagina de google',  function () {
    
    this.driver =  new webdriver.Builder()
        .forBrowser('chrome')
        .build();
    this.driver.get('http://www.google.com.ar');
});

When('Hago una busqueda cualquiera', function () {
    var barraDeBusqueda = this.driver.findElement(By.xpath('/html/body/div/div[4]/form/div[2]/div[1]/div[1]/div/div[2]/input'));
    barraDeBusqueda.sendKeys('HOLA');
    
});


Then('verificar que estamos en la pagina de google', function () {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});
Then('verificar que el titulo es correcto', function () {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});
Then('verificar que la busqueda devuelva resultados', function () {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});