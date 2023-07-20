import { BrowserContext, expect, Page } from '@playwright/test';
import { BaseActions } from '../base/base.actions';
import ComparePage from '../../pages/main/compare.page';

export class CompareActions extends BaseActions {
  comparePage: ComparePage;

  constructor(page: Page, context: BrowserContext) {
    super(page, context);
    this.comparePage = new ComparePage(page, context);
  }

  async searchByMarkTest () {
    const value = await this.comparePage.searchByMarkTest.textContent(); 
    expect(value).toContain("BMW"); 
  }

  async searchByMarkAndModelTest () {
    const value  = await this.comparePage.searchByMarkAndModelTest.textContent(); 
    expect(value).toContain("M8"); 
  }
  
  async searchByMarkModelAndGenerationTest () {
    const value = await this.comparePage.searchByMarkModelAndGenerationTest.textContent(); 
    expect(value).toContain("F91, F92, F93");
  }
  
  
}

