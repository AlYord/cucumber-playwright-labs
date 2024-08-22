import { After, BeforeAll, setWorldConstructor } from "@cucumber/cucumber";
import { Browser, chromium, Page } from "@playwright/test";

class CustomWorld {
    page: Page | undefined;
    browser: Browser | undefined;

    async openUrl(url: string) {
        this.browser = await chromium.launch({
            headless: false,
        });
        const context = await this.browser.newContext();
        this.page = await context.newPage();
        await this.page.goto(url);
    }

    async closeBrowser() {
        this.browser?.close();
    }
}

setWorldConstructor(CustomWorld);

After(async function (this: CustomWorld) {
    if (this.browser) {
        await this.closeBrowser();
    }
});