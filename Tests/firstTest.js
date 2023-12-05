const {Builder, By, Key} = require ("selenium-webdriver");

async function example() {

    //Open the UREL
    let driver = await new Builder().forBrowser("firefox").build();

    //Navigate to the website
    await driver.get("https://herziopinto.github.io/lista-de-tarefas/")

    //Add a task 
    await driver.findElement(By.id("inputTask")).sendKeys("Learn Selenium", Key.RETURN);
    await driver.findElement(By.id("inputTask")).sendKeys("Learn Cypress", Key.RETURN);

    //Close the page
    await driver.quit();



 }
example();
