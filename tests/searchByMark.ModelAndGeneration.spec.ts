import test from './test';
import { BMWM8Generations, BMWModels, Marks } from '../src/fixture/search.by.parameters.fixture';
import Log from '../src/utils/logger.utils';

test('Seach By Mark, Model and Generation', async ({ app }) => {
  Log.step("Открываем страницу"); 
  await app.base.openAvBy();

  Log.step("Нажимаем на поле 'Марка'"); 
  await app.searchByParameters.clickOnMarkButton(); 

  Log.step("Вводим значение", Marks.BMW); 
  await app.searchByParameters.inputMarkName(Marks.BMW);
  
  Log.step("Ожидаем...")
  await app.searchByParameters.waiter(); 

  Log.step("Нажимаем на Энтер"); 
  await app.searchByParameters.clickEnter(); 

  Log.step("Нажимаем на поле 'Модель'")
  await app.searchByParameters.clickOnModelButton(); 

  Log.step("Выбираем модель", BMWModels.M8);
  await app.searchByParameters.chooseModel(BMWModels.M8);
  
  Log.step("Нажимаем на поле 'Поколение'"); 
  await app.searchByParameters.clickOnGenerationButton(); 

  Log.step("Выбираем поколение", BMWM8Generations.F91F92F93); 
  await app.searchByParameters.chooseGeneration(BMWM8Generations.F91F92F93); 

  Log.step("Нажимаем на кнопку 'Показать *** объявлений'"); 
  await app.searchByParameters.clickOnShowResultButton(); 

  Log.step("Ожидаем...")
  await app.searchByParameters.waiter(); 

  Log.step("Делаем проверку...")
  await app.compare.searchByMarkModelAndGenerationTest(); 
});
