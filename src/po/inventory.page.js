/**
 * Inventory Page Object Model
 * Contains all elements and actions for the SauceDemo inventory page
 */

class InventoryPage {

    get headerTitle() {
        return $('//div[@class="app_logo" and text()="Swag Labs"]');
    }

    async isPageDisplayed() {
        try {
            await this.headerTitle.waitForDisplayed({ timeout: 5000 });
            return await this.headerTitle.isDisplayed();
        } catch {
            return false;
        }
    }

    async getPageTitle() {
        await this.headerTitle.waitForDisplayed({ timeout: 5000 });
        return await this.headerTitle.getText();
    }
}

export default new InventoryPage();