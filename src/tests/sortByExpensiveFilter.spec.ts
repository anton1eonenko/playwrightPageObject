import { expect } from '@playwright/test';
import { Marks, BMWModels, SortingTypes } from '../fixture/search.by.parameters.fixture';
import test from './test';
import Log from '../utils/logger.utils'


test('Sorting by expensive filter',  async ({app, page, browser}) => {
    Log.step("1. Открываем страницу");
    await app.base.openAvBy(); 
    
    Log.step("2. Нажимаем на поле 'Марка'"); 
    await app.searchByParameters.clickOnMarkButton(); 
    
    Log.step("3. Вводим значение", Marks.BMW);
    await app.searchByParameters.inputMarkName(Marks.BMW);

    Log.step("4. Ожидаем..."); 
    await app.searchByParameters.waiter(); 

    Log.step("5. Нажимаем на Энтер");
    await app.searchByParameters.clickEnter(); 

    Log.step("6. Ожидаем..."); 
    await app.searchByParameters.waiter();

    Log.step("7. Нажимаем на поле 'Модель'"); 
    await app.searchByParameters.clickOnModelButton(); 

    Log.step("8. Выбираем модель", BMWModels.M8); 
    await app.searchByParameters.chooseModel(BMWModels.M8);
    
    Log.step("9. Ожидаем..."); 
    await app.searchByParameters.waiter();

    Log.step("10. Нажимаем на кнопку 'Показать *** объявлений'");
    await app.searchByParameters.clickOnShowResultButton(); 

    Log.step("11. Нажимаем на кнопку выбора типа сортировки"); 
    await app.searchByParameters.clickOnSortingField();

    Log.step("12. Нажимаем на 'дорогие'"); 
    await app.searchByParameters.chooseSortingType(SortingTypes.Expensive);

    Log.step("13. Ожидаем..."); 
    await app.searchByParameters.waiter();

    Log.step("14. Получаем максимальную цену из массива цен"); 
    const a = await app.result.getMaxPrice({page, browser}); 

    Log.step("15. Получаем цену первого автомобиля после сортировки")
    const b = await app.result.getTheFirstMaximumPriceInResults({page, browser}); 

    Log.step("16. Делаем проверку...")
    expect(a).toBe(b); 
  
})