const { $ } = require('@wdio/globals')
const Page = require('./page');

//tipe  variable  ada const, var, & let 

const element = {
    fieldUsername: $('#user-name'),
    fieldPassword: $('#password'),
    btnSubmit: $('#login-button'),
    errorLockedOutUser: (dynamicMessage)=> $(`//h3[text()="${dynamicMessage}"]`)
}


class LoginPage extends Page {
    // NOTE:elements  collecrion


    async login (username) {
        await element.fieldUsername.waitForDisplayed({timeout: 2500});
        await element.fieldUsername.setValue(username);
        await element.fieldPassword.setValue(process.env.PASSWORD_SAUCEDEMO);
        await element.btnSubmit.click();
    }

    async validateLockedOutUserError(dynamicMessage)
    {
        await element.errorLockedOutUser(dynamicMessage).waitForDisplayed({timeout: 2500});
        await expect(element.errorLockedOutUser(dynamicMessage)).toBeDisplayed;
    }

    open () {
        return super.open('/');
    }
}

module.exports = new LoginPage();
