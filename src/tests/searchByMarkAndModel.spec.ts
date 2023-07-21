import test from './test';
import { Marks, BMWModels } from '../fixture/search.by.parameters.fixture';
import Log from '../utils/logger.utils'

test('Seach By Mark and Model', async ({ app }) => {
  Log.step('Открываем страницу')
  await app.base.openAvBy();

  Log.step('Нажимаем на поле "Марка"');
  await app.searchByParameters.clickOnMarkButton(); 

  Log.step('Вводим значение', Marks.BMW); 
  await app.searchByParameters.inputMarkName(Marks.BMW);

  Log.step('Нажимаем на Энтер');
  await app.searchByParameters.clickEnter(); 

  Log.step('Ожидаем...');
  await app.searchByParameters.waiter();

  Log.step('Нажимаем на поле "Модель"'); 
  await app.searchByParameters.clickOnModelButton(); 

  Log.step('Выбираем модель', BMWModels.M8);
  await app.searchByParameters.chooseModel(BMWModels.M8);  

  Log.step('Ожидаем...');
  await app.searchByParameters.waiter();

  Log.step("Нажимаем на кнопку 'Показать *** объявлений'"); 
  await app.searchByParameters.clickOnShowResultButton();

  Log.step("Делаем проверку..."); 
  await app.compare.searchByMarkAndModelTest(); 
});
