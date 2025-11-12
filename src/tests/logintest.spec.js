import { expect } from '@wdio/globals';
import { validUsers } from '../data/users.js';
import LoginPage from '../po/login.page.js';
import InventoryPage from '../po/inventory.page.js';


describe('SauceDemo Login Tests (UC-1, UC-2, UC-3)', () => {



    beforeEach(async () => {
         await LoginPage.open();
    });


    it('UC-1: Should show "Username is required" when both fields are empty', async () => {

       await LoginPage.login('anyuser', 'anypass');
       await LoginPage.clearCredentials();
       await LoginPage.loginButton.click();

        const errorMsg = await LoginPage.errorMessage.getText();
        expect(errorMsg).toBe('Epic sadface: Username and password do not match any user in this service');


    });
































});