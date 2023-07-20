import BasePage from "../base/base.page";


class SearchByParametersPage extends BasePage {
    get ShowResultButton () {
        return this.page.locator("//div[@class='filter__show-result']"); 
    }
    get Mark () {
        return this.page.locator("//div[@class='filter-models__row']//span[text()='Марка'][2]");
    }
    get MarkSearchField () {
        return this.page.locator("//ul[@class='dropdown-list dropdown-list--opened']//input[@placeholder]"); 
    }
    get Model () {
        return this.page.locator("((//div[@class='filter-models__column']//span[@class='dropdown-floatlabel__value']))[2]"); 
    }
    ModelChoise (model: string) {
        return this.page.locator(`//button[@data-item-label='${model}']`)
    }
    get Generation () {
        return this.page.locator("//div[@id='p-6-0-4-generation']//span[@class='dropdown-floatlabel__value']")
    }
    GenerationChoise (generation: string) {
        return this.page.locator(`//span[text()='${generation}']`)
    }
    get SortingField () {
        return this.page.locator("//button[@class='dropdown__control dropdown__control--active dropdown-link']")
    }
    SortingType (parameter: string) {
        return this.page.locator(`//button[text()='${parameter}']`)
    }
    
}

export default SearchByParametersPage