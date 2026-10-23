# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: DemoBlaze.spec.js >> 9 Login with valid credentials->Select a product under Monitors->Add to Cart->Click ok on the popup->Add details->Purchase
- Location: tests\DemoBlaze.spec.js:39:1

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: expect(locator).toBeVisible() failed

Locator:  locator('#totalp')
Expected: visible
Received: hidden

Call log:
  - Expect "toBeVisible" locator('#totalp') with timeout 60000ms
  - waiting for locator('#totalp')
    81 × locator resolved to <h3 id="totalp" class="panel-title"></h3>
       - unexpected value "hidden"
  - Test timeout of 60000ms exceeded.

```

```yaml
- navigation:
  - link "PRODUCT STORE":
    - /url: index.html
    - img
    - text: PRODUCT STORE
  - list:
    - listitem:
      - link "Home (current)":
        - /url: index.html
    - listitem:
      - link "Contact":
        - /url: "#"
    - listitem:
      - link "About us":
        - /url: "#"
    - listitem:
      - link "Cart":
        - /url: "#"
    - listitem
    - listitem:
      - link "Log out":
        - /url: "#"
    - listitem:
      - link "Welcome deeparavi":
        - /url: "#"
    - listitem
- heading "Products" [level=2]
- table:
  - rowgroup:
    - row "Pic Title Price x":
      - columnheader "Pic"
      - columnheader "Title"
      - columnheader "Price"
      - columnheader "x"
  - rowgroup
- heading "Total" [level=2]
- heading [level=3]
- button "Place Order"
- heading "About Us" [level=4]
- paragraph: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
- heading "Get in Touch" [level=4]
- paragraph: "Address: 2390 El Camino Real"
- paragraph: "Phone: +440 123456"
- paragraph: "Email: demo@blazemeter.com"
- heading "PRODUCT STORE" [level=4]:
  - img
  - text: PRODUCT STORE
- contentinfo:
  - paragraph: Copyright © Product Store
```

# Test source

```ts
  1  | const { test,expect} = require("@playwright/test");
  2  | 
  3  | class Cart
  4  | {
  5  |     constructor (page)
  6  |     {
  7  |         this.page=page
  8  |         this.total=this.page.locator("#totalp")
  9  |         
  10 |     }
  11 | 
  12 |     async placeorder()
  13 |     {
  14 |         await this.page.locator("#cartur").click()
  15 |         await this.page.waitForTimeout(7000)
> 16 |         await expect(this.total).toBeVisible();
     |                                  ^ Error: expect(locator).toBeVisible() failed
  17 |         await this.page.getByRole("button",{name:"Place Order"}).click()
  18 |         console.log("place order button clicked")
  19 |     }
  20 | }
  21 | module.exports=Cart
```