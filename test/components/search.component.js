class SearchComponent {

    get searchField() { return $("//input[@id='twotabsearchtextbox']") }
    get submitSearchBtn() { return $("//input[@type='submit']")}

    async typeText(text) {
        await this.searchField.setValue(text)
    }

    async clickSearchButton() {
        await this.submitSearchBtn.click();
    }

}

export default new SearchComponent();