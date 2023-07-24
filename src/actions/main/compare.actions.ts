import { BrowserContext, expect, Page } from '@playwright/test';
import { BaseActions } from '../base/base.actions';
import ComparePage from '../../pages/main/compare.page';
import { CompareValues } from '../../fixture/search.by.parameters.fixture';

export class CompareActions extends BaseActions {
  comparePage: ComparePage;

  constructor(page: Page, context: BrowserContext) {
    super(page, context);
    this.comparePage = new ComparePage(page, context);
  }

  async searchByMarkTest () {
    const value = await this.comparePage.searchByMarkTest.textContent(); 
    expect(value).toContain(CompareValues.searchByMarkTest); 
  }

  async searchByMarkAndModelTest () {
    const value  = await this.comparePage.searchByMarkAndModelTest.textContent(); 
    expect(value).toContain(CompareValues.searchByMarkAndModelTest); 
  }
  
  async searchByMarkModelAndGenerationTest () {
    const value = await this.comparePage.searchByMarkModelAndGenerationTest.textContent(); 
    expect(value).toContain(CompareValues.searchByMarkModelAndGenerationTest);
  }
  
  
}

