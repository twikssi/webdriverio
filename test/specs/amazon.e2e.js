import HomePage from '../pages/home.page.js'
import SearchPage from '../pages/search.page.js'
import fs from 'fs'; 
import { expect as expectChai } from 'chai'

const data = JSON.parse(fs.readFileSync('/Users/abarysevich/work/webdriverIO/amazon-webdriver/test/data/amazon-data.json'));

describe('My Amazon tests', () => {

    it('Assert search component', async () => {
        const expectedResult = 15
        await HomePage.open()
        await HomePage.searchComponent.typeText(data.searchWordLaptop)
        await HomePage.searchComponent.clickSearchButton()
        await SearchPage.checkUrlSearchField(data.searchWordLaptop)
       

        await SearchPage.searchResultsComponent.waitUntilResultsAppears(20)
        let result = await SearchPage.searchResultsComponent.numberOfElementsHave('laptop')
        
        await expectChai(result).to.be.above(expectedResult);
        
    })

})


