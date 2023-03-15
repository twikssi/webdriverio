import Commands from "../commands.js"

class SearchResultsComponent {

    constructor() {
        this.searchResultsConstr = '[class="a-section"] h2 a'
    }

    get searchResults() { return $$('[class="a-section"] h2 a') }

    async waitUntilResultsAppears(amount){
        await Commands.waitUntilElemtentsAppears(this.searchResultsConstr, amount)
    }

    async numberOfElementsHaveText(text) {
        let iterator = 0
        await this.searchResults.forEach(async (element) => {
            if ( (await element.getText()).toLowerCase().includes(text)) { iterator++ }
        });
        return iterator
    }

}

export default new SearchResultsComponent();