import { BrowserContext, expect, Page } from '@playwright/test';
import { BaseActions } from '../base/base.actions';
import SearchByParametersPage from '../../pages/main/search.by.parameters.page';
import { BMWModels, Marks, SortingTypes } from '../../fixture/search.by.parameters.fixture';


export class SearchByParametersActions extends BaseActions {
    searchByParametersPage: SearchByParametersPage;
  
    constructor(page: Page, context: BrowserContext) {
      super(page, context);
      this.searchByParametersPage = new SearchByParametersPage(page, context);
    }

    async waiter () {
      await this.page.waitForTimeout(1000);
    }

    async clickOnShowResultButton () {
      await this.searchByParametersPage.ShowResultButton.click(); 
    }
    
    async clickOnMarkButton () {
      await this.searchByParametersPage.Mark.click(); 
    }

    async inputMarkName (mark: string) {
      await this.searchByParametersPage.MarkSearchField.type(mark); 
    }

    async clickOnModelButton () {
      await this.searchByParametersPage.Model.click(); 
    }
    async chooseModel (model: string) {
      await this.searchByParametersPage.ModelChoise(model).click(); 
    }

    async clickOnGenerationButton () {
      await this.searchByParametersPage.Generation.click(); 
    }

    async chooseGeneration (generation:string) {
      await this.searchByParametersPage.GenerationChoise(generation).click(); 
    }

    async clickOnSortingField () {
      await this.searchByParametersPage.SortingField.click(); 
    }
    
    async chooseSortingType (parameter: string) {
      await this.searchByParametersPage.SortingType(parameter).click(); 
    }
    
    async clickEnter () {
      await this.page.keyboard.press('Enter');
    }
  
  }