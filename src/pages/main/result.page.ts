import BasePage from "../base/base.page";

class ResultPage extends BasePage {
    get AllPricesInBYN () {
        return this.page.locator("//div[contains(@class, 'listing-item__prices')]/div[contains(@class, 'listing-item__price')][1]")
    }
    get TheFirstCar () {
        return this.page.locator("((//div[contains(@class, 'listing-item__prices')]/div[contains(@class, 'listing-item__price')][1]))[1]")
    }
}

export default ResultPage