import {SearchPageObject} from '../pages/searchPage';

export = function () {
    let search: SearchPageObject = new SearchPageObject();
    this.When(/^I type "(.*?)"$/, (text) => {
        return search.searchTextBox.sendKeys(text);
    });

    this.Then(/^I click on search button$/, () => {
        return search.searchButton.click();
    });

}
