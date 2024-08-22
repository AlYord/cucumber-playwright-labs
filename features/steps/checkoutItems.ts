import { Then, When } from "@cucumber/cucumber";
import { Locator } from "playwright";
import { expect } from "playwright/test";

When('Alexander checkouts the cart', async function() {
    await this.page.click('//button[@data-test="checkout"]');
    await this.page.fill('//input[@id="first-name"]', 'Alexander');
    await this.page.fill('//input[@id="last-name"]', 'Is Testing');
    await this.page.fill('//input[@id="postal-code"]', '1234');
    await this.page.click('//input[@id="continue"]');
    await this.page.click('//button[@id="finish"]');
});

Then('The order is dispatched', async function() {
    const messageLocator: Locator = this.page.locator('//h2[text()="Thank you for your order!"]');
    await expect(messageLocator).toBeVisible();
});