import { BrowserContext, expect, Page } from '@playwright/test';
import { BaseActions } from '../base/base.actions';
import { BMWModels, Marks, SortingTypes } from '../../fixture/search.by.parameters.fixture';
import ResultPage from '../../pages/main/result.page';


export class ResultActions extends BaseActions {
    resultPage: ResultPage;
  
    constructor(page: Page, context: BrowserContext) {
      super(page, context);
      this.resultPage = new ResultPage(page, context);
    }
    // async getAllPricesInBYN () {
    //     await this.resultPage.AllPricesInBYN; 
    // }

    async getMinPrice ({page, browser}) {
      const context = await browser.newContext()
      const AllPricesInString = await new ResultPage(page, context).AllPricesInBYN.allTextContents();
      const AllPricesInNumber = AllPricesInString.map(price => parseFloat(price.replace(/[^\d.-]/g, '')));  
      const minPrice = Math.min(...AllPricesInNumber);    
      return minPrice
    }

    async getTheFirstMinimumPriceInResults ({page, browser}) {
      const context = await browser.newContext()
      const TheFirstPriceInString = await new ResultPage(page, context).TheFirstCar.allTextContents();       // получаем цену первого кара после фильтрации
      const TheFirstCarInNumber = TheFirstPriceInString.map(price => parseFloat(price.replace(/[^\d.-]/g, '')));  
      const a = TheFirstCarInNumber[0];   
      return a
    }
    async getMaxPrice ({page, browser}) {
      const context = await browser.newContext()
      const AllpricesInString = await new ResultPage(page, context).AllPricesInBYN.allTextContents();
      const AllpricesInNumber = AllpricesInString.map(price => parseFloat(price.replace(/[^\d.-]/g, '')));  
      const maxPrice = Math.max(...AllpricesInNumber); 
      return maxPrice
    }
    async getTheFirstMaximumPriceInResults ({page, browser}) {
      const context = await browser.newContext()
      const TheFirstPriceInString = await new ResultPage(page, context).TheFirstCar.allTextContents();       
      const TheFirstCarInNumber = TheFirstPriceInString.map(price => parseFloat(price.replace(/[^\d.-]/g, '')));  
      const a = TheFirstCarInNumber[0];   
      return a 
    }
  }