import Page from './page.js';
import SearchComponent from '../components/search.component.js'
import SearchResultsComponent from '../components/search.results.component.js'


class SearchPage extends Page {

    get searchComponent() { return SearchComponent }
    get searchResultsComponent() { return SearchResultsComponent }

    open() {
        return super.open();
    }

    async checkUrlSearchField(textField) {
        await browser.waitUntil(async () => {
            return (await browser.getUrl()).includes(textField)
        }, {
            timeout: 5000,
            timeoutMsg: 'expected url contains search field'
        })
    }
}

export default new SearchPage();