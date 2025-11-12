
class InventoryPage {
  get headerTitle() { return $('//div[@class="app_logo" and text()="Swag Labs"]'); }
}

export default new InventoryPage();