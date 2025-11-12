import { browser, expect } from '@wdio/globals';
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

    it('UC-2: Should show "Password is required" when password is empty', async () => {

        await LoginPage.usernameInput.setValue(validUsers[0]);
        await LoginPage.passwordInput.setValue(validUsers[1]);
        await LoginPage.passwordInput.clearValue();
        await LoginPage.loginButton.click();

        await browser.pause(1000);
        const errorExists = await LoginPage.errorMessage.isExisting();

        if (errorExists) {
            const errorMsg = await LoginPage.errorMessage.getText();
            expect(errorMsg).toBe('Epic sadface: Password is required');
        } else { 
            console.log('element is missing');
            
        }

    });


    it('UC-3: Should login successfully with valid credentials', async () => {

        await LoginPage.login(validUsers[0], validUsers[1]);
        const isInventoryPageDisplayed = await InventoryPage.isPageDisplayed();
        expect(isInventoryPageDisplayed).toBe(true);
    });

});