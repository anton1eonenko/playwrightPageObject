"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const actions_1 = require("../actions");
const test = test_1.test.extend({
    app: async ({ page, context }, use) => {
        const app = new actions_1.App(page, context);
        use(app);
    }
});
exports.default = test;
