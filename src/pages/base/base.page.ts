import { BrowserContext, Page } from '@playwright/test';

const map = new Map();

export default class BasePage {
  readonly page: Page;
  readonly context: BrowserContext;
  Map: Map<unknown, Page | unknown>;

  constructor(page: Page, context: BrowserContext) {
    this.page = page;
    this.context = context;
    this.Map = map;
  }
}