import { expect } from '@playwright/test';
import { Marks, BMWModels, SortingTypes } from '../fixture/search.by.parameters.fixture';
import test from './test';
import Log from '../utils/logger.utils'


test('Sorting by expensive filter',  async ({app, page, browser}) => {
    Log.step("Открываем страницу");
    await app.base.openAvBy(); 
    
    Log.step("Нажимаем на поле 'Марка'"); 
    await app.searchByParameters.clickOnMarkButton(); 
    
    Log.step("Вводим значение", Marks.BMW);
    await app.searchByParameters.inputMarkName(Marks.BMW);

    Log.step("Ожидаем..."); 
    await app.searchByParameters.waiter(); 

    Log.step("Нажимаем на Энтер");
    await app.searchByParameters.clickEnter(); 

    Log.step("Ожидаем..."); 
    await app.searchByParameters.waiter();

    Log.step("Нажимаем на поле 'Модель'"); 
    await app.searchByParameters.clickOnModelButton(); 

    Log.step("Выбираем модель", BMWModels.M8); 
    await app.searchByParameters.chooseModel(BMWModels.M8);
    
    Log.step("Ожидаем..."); 
    await app.searchByParameters.waiter();

    Log.step("Нажимаем на кнопку 'Показать *** объявлений'");
    await app.searchByParameters.clickOnShowResultButton(); 

    Log.step("Нажимаем на кнопку выбора типа сортировки"); 
    await app.searchByParameters.clickOnSortingField();

    Log.step("Нажимаем на 'дорогие'"); 
    await app.searchByParameters.chooseSortingType(SortingTypes.Expensive);

    Log.step("Ожидаем..."); 
    await app.searchByParameters.waiter();

    Log.step("Получаем максимальную цену из массива цен"); 
    const a = await app.result.getMaxPrice({page, browser}); 

    Log.step("Получаем цену первого автомобиля после сортировки")
    const b = await app.result.getTheFirstMaximumPriceInResults({page, browser}); 

    Log.step("Делаем проверку...")
    expect(a).toBe(b); 
  
})