/**
 * UC-1: Test Login form with empty credentials
 * 
 * Steps:
 * 1. Type any credentials into "Username" and "Password" fields
 * 2. Clear the inputs
 * 3. Hit the "Login" button
 * 4. Check the error messages: "Epic sadface: Username and password do not match any user in this service
 */

/**
 * UC-2: Test Login form with credentials by passing Username
 * 
 * Steps:
 * 1. Type any credentials in username
 * 2. Enter password
 * 3. Clear the "Password" input
 * 4. Hit the "Login" button
 * 5. Check the error messages: "Epic sadface: Password is required"
 */

/**
 * UC-3: Test Login form with credentials by passing Username & Password
 * 
 * Steps:
 * 1. Type credentials in username which are under Accepted username sections
 * 2. Enter password as "secret_sauce"
 * 3. Click on Login and validate the title(Swag Labs) in the dashboard
 */

import { browser, expect } from '@wdio/globals';
import { LoginPage, InventoryPage } from '../po';

const username = process.env.USERNAME;
const password = process.env.PASSWORD;



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
    await LoginPage.usernameInput.setValue(username);
    await LoginPage.passwordInput.clearValue();
    await LoginPage.loginButton.click();

    const errorMsg = await LoginPage.getErrorMessage();
    expect(errorMsg).toBe('Epic sadface: Password is required');
});



    it('UC-3: Should login successfully with valid credentials', async () => {

        await LoginPage.login(username, password);;
        const isInventoryPageDisplayed = await InventoryPage.isPageDisplayed();
        expect(isInventoryPageDisplayed).toBe('Swag Labs');

    });

});