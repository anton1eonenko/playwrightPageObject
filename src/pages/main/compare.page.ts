import BasePage from "../base/base.page";


class ComparePage extends BasePage {

    get searchByMarkTest () {
        return this.page.locator("((//span[@class='link-text']))[2]"); 
    }
    get searchByMarkAndModelTest () {
        return this.page.locator("((//span[@class='link-text']))[3]")
    }
    get searchByMarkModelAndGenerationTest () {
        return this.page.locator("((//div[@class='listing-item__about']//span[@class='link-text']))[1]")
    }
}

export default ComparePage