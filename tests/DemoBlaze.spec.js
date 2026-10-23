const {test } = require("@playwright/test");
const POManager=require("../pages/POManager");
//const Cart = require("../pages/Cart");

const testdata=JSON.parse(JSON.stringify(require("../Utils/PlaceOrderLogin.json")))


test('7 Loginwithvalidcredentials->Select a product->Add to Cart->Click ok',async({page})=>{
    const poManager=new POManager(page)
    const homepage=poManager.getHomePage()
    const signUpPage=poManager.getSignUpPage()
    const loginPage=poManager.getLoginPage()
    const cart=poManager.getCart()

    await signUpPage.goto()
    await loginPage.validlogin(testdata.validusername,testdata.validpassword)
    await homepage.selectProduct()
    await cart.placeorder()
    //await page.pause()
});

test('8 Login with valid credentials->Select a product under Phones->Add to Cart->Click ok on the popup->Add details->Purchase',async({page})=>{
    const poManager=new POManager(page)
    const homepage=poManager.getHomePage()
    const signUpPage=poManager.getSignUpPage()
    const loginPage=poManager.getLoginPage()
    const cart=poManager.getCart()
    const summary=poManager.getSummary()

    await signUpPage.goto()
    await loginPage.validlogin(testdata.validusername,testdata.validpassword)
    await homepage.selectProductPhone()
    await cart.placeorder()
    await summary.shippingdetails()
    //console.log("laptops selected")
    //await page.pause()
});

test('9 Login with valid credentials->Select a product under Monitors->Add to Cart->Click ok on the popup->Add details->Purchase',async({page})=>{
    const poManager=new POManager(page)
    const homepage=poManager.getHomePage()
    const signUpPage=poManager.getSignUpPage()
    const loginPage=poManager.getLoginPage()
    const cart=poManager.getCart()
    const summary=poManager.getSummary()

    await signUpPage.goto()
    await loginPage.validlogin(testdata.validusername,testdata.validpassword)
    await homepage.selectProductMonitor()
    await cart.placeorder()
    await summary.shippingdetails()
    //console.log("laptops selected")
    //await page.pause()
})
