const {Builder, By, Key} = require ("selenium-webdriver");
const assert = require ("assert")

async function example() {

    //Open the UREL
    let driver = await new Builder().forBrowser("firefox").build();

    //Navigate to the website
    await driver.get("https://herziopinto.github.io/lista-de-tarefas/")

    //Add a task 
    await driver.findElement(By.id("inputTask")).sendKeys("Learn Selenium", Key.RETURN);
    await driver.findElement(By.id("inputTask")).sendKeys("Learn Cypress", Key.RETURN);


    //Assertion Selenium
    let seleniumText = await driver.findElement(By.xpath("/html/body/div/section/ul/li[1]/label")).getText().then(function(value){
        return value
    });
     // Assertion using node
    assert.strictEqual(seleniumText,"Learn Selenium");
    
    
    //Assertion Cypress
    let cypressText = await driver.findElement(By.xpath("/html/body/div/section/ul/li[2]/label")).getText().then(function(value){
        return value
    });
    // Assertion using node
    assert.strictEqual(cypressText, "Learn Cypress");

    //Close the page
    await driver.quit();


}
example()