exports.LoginPage = class LoginPage {

    constructor(page) {

        this.page = page
        this.username_textbox = page.locator('#user_email')
        this.password_textbox = page.locator('#user_password')
        this.login_button = page.getByRole('button', { name: 'Log in' })
    }

    async gotoLoginPage(){
        await this.page.goto('https://account.p.k2labs.org/log-in?alert=session_expired&return_url=https%3A%2F%2Fapp.p.k2labs.org%2Fen-US%2F');
    }

    async login(username, password){
        await this.username_textbox.fill(username)
        await this.password_textbox.fill(password)
        await this.login_button.click()
    }

}