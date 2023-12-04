const { Given, When, Then, setDefaultTimeout, After, Before } = require('@cucumber/cucumber');
const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const assert = require('assert');
const path = require('path');

// Specify the path to ChromeDriver
const chromeDriverPath = path.resolve('/Users/ferdorom/Documents/cenfotec/Calidad/bdd/chromedriver-mac-arm64');

setDefaultTimeout(20 * 1000); // Establece el tiempo de espera a 20 segundos


let driver;

Before(async function () {
    // Inicializar el driver antes de cada escenario
    driver = new Builder()
        .forBrowser('chrome')
        .setChromeOptions(new chrome.Options().setChromeBinaryPath(chromeDriverPath).addArguments("--start-fullscreen"))
        .build();
});
// Given(s)

Given('el navegador Chrome está abierto', async function () {
    await driver.get('about:blank');
});

// When(s)

When('el usuario navega a {string}', async function (url) {
    await driver.get(url);
});

When('el usuario busca {string}', async function (searchQuery) {
    let inputField = await driver.findElement(By.name('q'));
    await inputField.sendKeys(searchQuery, Key.RETURN);
});

// Then(s)

Then('debería mostrar la página de inicio de {string}', async function (webTitle) {
    const title = await driver.getTitle();
    assert(title === webTitle);
});

Then('debería mostrar resultados para {string}', async function (searchQuery) {
    let results = await driver.findElement(By.id('search'));
    assert(results.isDisplayed());
    let title = await driver.getTitle();
    assert(title.includes(searchQuery));
});

Then('la barra de opciones debería contener los siguientes elementos', async function (dataTable) {
    let expectedItems = dataTable.rawTable.map(row => row[0]);
    let menuItems = await driver.findElements(By.css('#menu-main-menu li'));
    for (const expectedItem of expectedItems) {
        let found = false;
        for (const menuItem of menuItems) {
            let text = await menuItem.getText();
            if (text.includes(expectedItem)) {
                found = true;
                break;
            }
        }
        assert(found, `El elemento '${expectedItem}' no fue encontrado en la barra de opciones`);
    }
});

Then('debería existir la maestría en {string}', async function (programName) {
    await driver.sleep(5000); // Espera 5 segundos

    let found = false;
    let elements = await driver.findElements(By.css('h2.entry-title a'));
    for (const element of elements) {
        let text = await element.getText();
        if (text.includes(programName)) {
            found = true;
            break;
        }
    }
    assert(found, `La maestría '${programName}' no fue encontrada en la página`);
});

// Este hook se ejecutará después de cada escenario
After(async function () {
    await driver.quit(); // Cierra el navegador
});


