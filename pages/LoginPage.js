const { test,expect} = require("@playwright/test");
class LoginPage
{
constructor(page)
    {
     this.page=page
        
        this.login=page.locator("#login2")
        this.logusername=page.locator("#loginusername")
        this.logpassword=page.locator("#loginpassword")
        this.loginbtn=page.getByRole("button",{name:"Log in"})
        this.displayeduser=page.locator("#nameofuser")
        this.logout=page.locator("#logout2")
        
    }
    async validlogin(username,password)
    {
        await this.page.goto("https://www.demoblaze.com/")
        await this.login.click()
        await this.logusername.fill(username)
        await this.logpassword.fill(password)
        await this.loginbtn.click()
        console.log("login button clicked")
        await this.displayeduser.waitFor(2000)
        await expect(this.displayeduser).toContainText(username);
        console.log(username + " -user Logged in successfully");
    }


async invalidlogin1(username, password) {
    await this.login.click();
    await this.logusername.fill(username);
    await this.logpassword.fill(password);
    await this.loginbtn.click();
   
    this.page.once('dialog', async (dialog) => {
        const message = dialog.message();

        console.log("Alert message:", message);

        if (message.includes("User does not exist.")) {
            console.log("Entered username is invalid");
            await expect(message).toContain("User does not exist.");
        }
        
        await dialog.accept();
    });
    
}


async invalidlogin2(username, password) {
    await this.login.click();
    await this.logusername.fill(username);
    await this.logpassword.fill(password);
    await this.loginbtn.click();
    
    this.page.once('dialog', async (dialog) => {
        const message = dialog.message();

        console.log("Alert message:", message);

        if (message.includes("Wrong password.")) {
            console.log("Entered password is invalid");
            await expect(message).toContain("Wrong password.");
        }
        
        await dialog.accept();
    });
    
}

async invalidloginboth(username, password) {
    await this.login.click();
    await this.logusername.fill(username);
    await this.logpassword.fill(password);
    await this.loginbtn.click();
    
    this.page.once('dialog', async (dialog) => {
        const message = dialog.message();

        console.log("Alert message:", message);

        if (message.includes("User does not exist.")) {
            console.log("Entered username and password are invalid");
            await expect(message).toContain("User does not exist.");
        }
        
        await dialog.accept();
    });
    
}

  async logoutcall()
  {
        await expect(this.logout).toBeVisible();
        await this.logout.click();
        console.log("logout successful ")
  }
}
    
module.exports=LoginPage