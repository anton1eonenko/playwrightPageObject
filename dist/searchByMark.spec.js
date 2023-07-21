"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = __importDefault(require("./test"));
const search_by_parameters_fixture_1 = require("../fixture/search.by.parameters.fixture");
const logger_utils_1 = __importDefault(require("../utils/logger.utils"));
(0, test_1.default)('Seach By Mark', async ({ app }) => {
    logger_utils_1.default.step('1. Открываем страницу');
    await app.base.openAvBy();
    logger_utils_1.default.step('2. Нажимаем на поле "Марка"');
    await app.searchByParameters.clickOnMarkButton();
    logger_utils_1.default.step("3. Вводим значение", search_by_parameters_fixture_1.Marks.BMW);
    await app.searchByParameters.inputMarkName(search_by_parameters_fixture_1.Marks.BMW);
    logger_utils_1.default.step("4. Ожидаем...");
    await app.searchByParameters.waiter();
    logger_utils_1.default.step("5. Нажимаем на Энтер");
    await app.searchByParameters.clickEnter();
    logger_utils_1.default.step("6. Ожидаем...");
    await app.searchByParameters.waiter();
    logger_utils_1.default.step("7. Нажимаем на кнопку 'Показать *** объявлений'");
    await app.searchByParameters.clickOnShowResultButton();
    logger_utils_1.default.step("8. Делаем проверку");
    await app.compare.searchByMarkTest();
});
