import Page from './page.js';
import SearchComponent from '../components/search.component.js'


class HomePage extends Page {
    
    get searchComponent() {return SearchComponent}

    open() {
        return super.open();
    }
}

export default new HomePage();
