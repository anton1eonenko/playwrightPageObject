import { expect } from '@playwright/test';
import test from './test';
import { Marks } from '../fixture/search.by.parameters.fixture';
import Log from '../utils/logger.utils'

test.only('Seach By Mark', async ({ app }) => {
  Log.step('1. Открываем страницу'); 
  await app.base.openAvBy();

  Log.step("2. Ожидаем...");
  await app.searchByParameters.waiter();

  Log.step('3. Нажимаем на поле "Марка"');
  await app.searchByParameters.clickOnMarkButton(); 
  
  Log.step("4. Вводим значение", Marks.BMW);
  await app.searchByParameters.inputMarkName(Marks.BMW); 

  Log.step("5. Ожидаем...");
  await app.searchByParameters.waiter(); 

  Log.step("6. Нажимаем на Энтер");
  await app.searchByParameters.clickEnter(); 

  Log.step("7. Ожидаем...");
  await app.searchByParameters.waiter(); 

  Log.step("8. Нажимаем на кнопку 'Показать *** объявлений'");
  await app.searchByParameters.clickOnShowResultButton();
  
  Log.step("9. Делаем проверку");
  await app.compare.searchByMarkTest(); 
});
