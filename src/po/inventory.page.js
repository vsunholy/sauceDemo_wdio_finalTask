
class InventoryPage {
  get headerTitle() { return $('//div[@class="app_logo" and text()="Swag Labs"]'); }

  async isPageDisplayed() {
    try {
      return await this.headerTitle.isDisplayed();
    } catch {
      return false;
    }
  }
}

export default new InventoryPage();