import BasePage from '../../pages/base/base.page';
import { url } from '../../utils/url';

export class BaseActions extends BasePage {
  async openAvBy() {
    await this.page.goto(url.URL, { timeout: 5000 });
  }
}