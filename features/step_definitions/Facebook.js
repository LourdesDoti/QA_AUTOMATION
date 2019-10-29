const { Given, When, Then } = require('cucumber');
const { Builder, By, Key, until } = require('selenium-webdriver');
require('chromedriver');
var webdriver = require('selenium-webdriver');
var driver;
var { setDefaultTimeout } = require('cucumber');

Given('Quiero ir a la pagina de facebook', async function () {
  setDefaultTimeout(80 * 1000);
  var chromeCapabilities = webdriver.Capabilities.chrome();
  chromeCapabilities.set('chromeOptions', {
    'args': ['--start-fullscreen']
  });

  this.driver = await new webdriver.Builder()
    .forBrowser('chrome')
    .withCapabilities(chromeCapabilities)
    .build();

  await this.driver.get('http://www.facebook.com.ar');
});

When('inicio sesion en facebook con {} y contraseña {}' , async function(usuario, password){
  await email.sendKeys(usuario);
  await contraseña.sendKeys(password);
  await entrar.click();
});

When(/^inicio sesion en facebook con "(.*)" y contraseña "(.*)"$/, async function (mail, contra) {
  
  await email.sendKeys(mail);
  await contraseña.sendKeys(contra);
  await entrar.click();

});

When('entro al perfil', async function () {
  var perfil = await this.driver.findElement(By.xpath('//*[@id="u_0_a"]/div[1]/div[1]/div/a/span/span'));
  await perfil.click();
});

When('mirar las notificaciones', async function () {
  var notificaciones = await this.driver.findElement(By.xpath('//*[@id="js_f7"]/div'));
  await notificaciones.click();
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
  console.log('El titulo es ', titulo);
});
Then('verificar que el estado se haya publicado', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('verificar que inicie sesion', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});