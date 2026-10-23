const { test,expect} = require("@playwright/test");
class SignUp
{
    constructor(page)
    {
     this.page=page
     this.signupusername=page.locator("#sign-username")
     this.signuppassword=page.locator("#sign-password")
     this.signupbtn=page.getByRole("button",{name:"Sign up"})
     this.signupclosebtn=page.locator("#signInModal").locator("text=Close")
     this.signuplink=page.locator("#signin2")
    }
    async goto()
    {
        await this.page.goto("https://www.demoblaze.com/")
    }

    async clickSignUp(username,password)
    {
        await this.signuplink.click()
        await this.signupusername.fill(username)
        await this.signuppassword.fill(password)
        await this.signupbtn.click()
        this.page.on('dialog',async dialog=>
        {
        const message = dialog.message();
        await this.page.waitForTimeout(3000)
        await expect(message).toContain("Sign up successful.");
        await dialog.accept()
        })
    }

    async CloseSignUp(username,password)
    {
        await this.signuplink.click()
        await this.signupusername.fill(username)
        await this.signuppassword.fill(password)
        await expect(this.signupbtn).toBeVisible();
        await this.signupclosebtn.click()
    }
}
module.exports=SignUp