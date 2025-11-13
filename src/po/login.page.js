
/**
 * Login Page Object Model
 * Contains all elements and actions for the SauceDemo login page
 */
class LoginPage {

    get usernameInput() { return $('//input[@id="user-name"]'); }
    get passwordInput() { return $('//input[@id="password"]'); }
    get loginButton() { return $('//input[@id="login-button"]'); }
    get errorMessage() { return $('//h3[@data-test="error"]'); }

    async open() {
        await browser.url('/');
    }

    async login(username, password) {
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }


    async clearCredentials() {
        await this.usernameInput.clearValue();
        await this.passwordInput.clearValue();
    }
    async clearPassword() {
        await this.passwordInput.click();
        await browser.keys(['Control', 'a']);
        await browser.keys(['Backspace']);
        await browser.keys(['Tab']);
    }
    async getErrorMessage() {
        await this.errorMessage.waitForDisplayed({ timeout: 5000 });
        return this.errorMessage.getText();
    }

}

export default new LoginPage();