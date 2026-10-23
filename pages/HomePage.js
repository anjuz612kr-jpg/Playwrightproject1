const { test,expect} = require("@playwright/test");

class HomePage
{
    constructor (page)
    {
        this.page=page
        this.lap=page.getByRole("link",{name:"Laptops"})
        this.item1=page.getByRole("link",{name:"Sony vaio i5"})
        this.addcartbtn=page.getByRole("link",{name:"Add to cart"})
        this.phone=page.getByRole("link",{name:"Phones"})
        this.item2=page.getByRole("link",{name:"Samsung galaxy s6"})
        this.monitor=page.getByRole("link",{name:"Monitors"})
        this.item3=page.getByRole("link",{name:"ASUS Full HD"})
        
    }

    async selectProduct()
    {
        await this.lap.click()
        await this.item1.click()
        await this.addcartbtn.click()
        await this.page.on('dialog', async dialog =>
             {
              console.log(`Dialog message: ${dialog.message()}`);
              await dialog.accept();
              await expect(dialog.message()).toContain("Product added.");
              console.log("Laptop added to cart successfully")});
    }
    
    async selectProductPhone()
    {
        await this.phone.click()
        await this.item2.click()
        await this.addcartbtn.click()
        await this.page.on('dialog', async dialog =>
             {
              console.log(`Dialog message: ${dialog.message()}`);
              await dialog.accept();
              await expect(dialog.message()).toContain("Product added.");
              console.log("Phone added to cart successfully")});
    }

    async selectProductMonitor()
    {
        await this.monitor.click()
        await this.item3.click()
        await this.addcartbtn.click()
        await this.page.on('dialog', async dialog =>
             {
              console.log(`Dialog message: ${dialog.message()}`);
              await dialog.accept();
              await expect(dialog.message()).toContain("Product added.");
              console.log("Monitor added to cart successfully")});
    }
}
module.exports=HomePage