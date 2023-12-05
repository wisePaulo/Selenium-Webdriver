const {Builder, By, Key} = require ("selenium-webdriver");
var should = require ("chai").should();

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
   //Assertion using Chai should
   seleniumText.should.equal("Learn Selenium")

    
    
    //Assertion Cypress
    let cypressText = await driver.findElement(By.xpath("/html/body/div/section/ul/li[2]/label")).getText().then(function(value){
        return value
    });
    //Assertion using Chai should
    cypressText.should.equal("Learn Cypress")

    //Close the page
    await driver.quit();


}
example()