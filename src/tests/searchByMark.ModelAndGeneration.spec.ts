import test from './test';
import { Marks, BMWM8Generations, BMWModels } from '../fixture/search.by.parameters.fixture';
import Log from '../utils/logger.utils'


test('Seach By Mark, Model and Generation', async ({ app }) => {
  Log.step("1. Открываем страницу"); 
  await app.base.openAvBy();

  Log.step("2. Нажимаем на поле 'Марка'"); 
  await app.searchByParameters.clickOnMarkButton(); 

  Log.step("3. Вводим значение", Marks.BMW); 
  await app.searchByParameters.inputMarkName(Marks.BMW);
  
  Log.step("4. Ожидаем...")
  await app.searchByParameters.waiter(); 

  Log.step("5. Нажимаем на Энтер"); 
  await app.searchByParameters.clickEnter(); 

  Log.step("6. Нажимаем на поле 'Модель'")
  await app.searchByParameters.clickOnModelButton(); 

  Log.step("7. Выбираем модель", BMWModels.M8);
  await app.searchByParameters.chooseModel(BMWModels.M8);
  
  Log.step("8. Нажимаем на поле 'Поколение'"); 
  await app.searchByParameters.clickOnGenerationButton(); 

  Log.step("9. Выбираем поколение", BMWM8Generations.F91F92F93); 
  await app.searchByParameters.chooseGeneration(BMWM8Generations.F91F92F93); 

  Log.step("10. Нажимаем на кнопку 'Показать *** объявлений'"); 
  await app.searchByParameters.clickOnShowResultButton(); 

  Log.step("11. Ожидаем...")
  await app.searchByParameters.waiter(); 

  Log.step("12. Делаем проверку...")
  await app.compare.searchByMarkModelAndGenerationTest(); 
});
