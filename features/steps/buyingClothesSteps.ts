import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect, Locator } from '@playwright/test';

setDefaultTimeout(60 * 1000);

Given('Alexander opens the website', async function () {
    if (typeof this.openUrl !== 'function') {
        console.error('openUrl is not defined on this context.');
    }

    await this.openUrl("https://www.saucedemo.com/");
});

Given('Alexander logs in', async function () {
    await this.page.fill('//input[@placeholder="Username"]', 'standard_user');
    await this.page.fill('//input[@placeholder="Password"]', 'secret_sauce');
    await this.page.click('//input[@id="login-button"]');
});

When("Alexander goes to the products section", async function() {
    await this.page.click('//button[@id="react-burger-menu-btn"]');
    await this.page.click('//a[@id="inventory_sidebar_link"]');
});

Then("Alexander adds a {string} to the cart", async function(clothing: string) {
    await this.page.click(`//div[@class="inventory_item" and contains(., "${clothing}")]//button`);
});

Then("{string} is in the cart", async function(clothing: string) {
    const clothingLocator: Locator = this.page.locator(`//div[text()="${clothing}"]`);
    await this.page.click('//a[@data-test="shopping-cart-link"]');
    await expect(clothingLocator).toBeVisible();
});

Then("The activity is reset", async function() {
    await this.page.click('//button[@id="react-burger-menu-btn"]');
    await this.page.click('//a[@id="reset_sidebar_link"]');
});