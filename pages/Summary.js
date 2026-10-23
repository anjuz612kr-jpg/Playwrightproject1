const { test,expect} = require("@playwright/test");

class Summary
{
    constructor (page)
    {
        this.page=page
        this.name=page.locator("#name")
        this.country=page.locator("#country")
        this.city=page.locator("#city")
        this.card=page.locator("#card")
        this.month=page.locator("#month")
        this.year=page.locator("#year")
        this.purchasebtn=page.getByRole("button",{name:"Purchase"})
        this.okbtn=page.getByRole("button",{name:"OK"})
    }

    async shippingdetails()
    {
      await this.name.fill("Tanush")
      await this.country.fill("India")
      await this.city.fill("Kochi")
      await this.card.fill("123456678888")
      await this.month.fill("08")
      await this.year.fill("2030")
      await this.purchasebtn.click()
      console.log("user details added")
      await this.page.waitForTimeout(3000)
      this.page.once('dialog', async (dialog) => {
        const confirmation = dialog.message();
        await expect(confirmation).toContain("Thank you for your purchase!");  
    })
    await this.okbtn.click()
    //await this.page.getByRole("button",{name:"Close"}).click()
    console.log("purchase successful")
    }
}
module.exports=Summary