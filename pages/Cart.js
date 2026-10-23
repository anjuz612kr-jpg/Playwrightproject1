const { test,expect} = require("@playwright/test");

class Cart
{
    constructor (page)
    {
        this.page=page
        this.total=this.page.locator("#totalp")
        
    }

    async placeorder()
    {
        await this.page.locator("#cartur").click()
        await this.page.waitForTimeout(7000)
        await expect(this.total).toBeVisible();
        await this.page.getByRole("button",{name:"Place Order"}).click()
        console.log("place order button clicked")
    }
}
module.exports=Cart