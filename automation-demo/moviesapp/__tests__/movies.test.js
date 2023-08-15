const {Builder, Browser, By, until} = require('selenium-webdriver')

let driver

beforeEach(async () =>{
    driver = await new Builder().forBrowser(Browser.CHROME).build()
})

afterEach(async ()=>{
    await driver.quit()
})
// ALL THE ABOVE STUFF IS THE SAME EVERY TIME ******************
describe('Test the movies app', () =>{
    it('can add a movie', async ()=>{
        await driver.get('http://localhost:3000/')
        let searchKey = 'Return Of The King'
        await driver.findElement(By.css('input[name="movieTitle"]')).sendKeys(searchKey)
        await driver.sleep(2000)
        await driver.findElement(By.css('button[type="submit"]')).click()
        const addedMovie = await driver.wait(until.elementLocated(By.css('#movies-list li label')), 1000)
        expect(await addedMovie.getText()).toBe(searchKey)
    })
})