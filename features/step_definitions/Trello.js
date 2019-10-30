const { Given, When, Then } = require('cucumber');
const { Builder, By, Key, until } = require('selenium-webdriver');
const { assert } = require('chai');
require('chromedriver');
var webdriver = require('selenium-webdriver');
var driver;
var {setDefaultTimeout} = require('cucumber');



Given('Quiero ir a la pagina de Trello', function () {

    setDefaultTimeout(60 * 1000);
    this.driver = new webdriver.Builder()
        .forBrowser('chrome')
        .build();
    this.driver.get('http://www.trello.com');
});

Then('verificar que el titulo sea correcto', async function () {
    
    var titulo = await this.driver.getTitle();
    await assert( titulo === 'Trello', 'Titulo actual: '+ titulo + ' Titulo esperado:Trello');
}); 
 

When('inicio sesion en Trello con {} y contraseña {}' , async function(usuario, password){
    var iniciarSesion = await this.driver.findElement(By.xpath('//*[.="Iniciar sesión"]'));
    await iniciarSesion.click();
    var email = await this.driver.findElement(By.xpath('//*[@id="user"]'));
    await email.sendKeys(usuario);
    var contraseña = await this.driver.findElement(By.xpath('//*[@id="password"]'));
    await contraseña.sendKeys(password);
    var entrar = await this.driver.findElement(By.xpath('//*[@id="login"]'));
    await entrar.click();
  });