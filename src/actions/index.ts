import { BrowserContext, Page } from '@playwright/test';
import { BaseActions } from './base/base.actions';
import { SearchByParametersActions } from './main/search.by.parameters.actions';
import { CompareActions } from './main/compare.actions';
import { ResultActions } from './main/result.actions';

export  class App {
    base: BaseActions
    searchByParameters: SearchByParametersActions
    compare: CompareActions
    result: ResultActions

  constructor(page: Page, context: BrowserContext) {
    this.base = new BaseActions(page, context);
    this.searchByParameters = new SearchByParametersActions(page, context); 
    this.compare = new CompareActions(page, context); 
    this.result = new ResultActions(page, context)
  }
}