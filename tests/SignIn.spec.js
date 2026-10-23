const {test } = require("@playwright/test");
const POManager=require("../pages/POManager")
const testdata=JSON.parse(JSON.stringify(require("../Utils/PlaceOrderData.json")))


test ('1 SignUp->EnterData->ClickSignUp',async({page})=>
    {
    const poManager=new POManager(page)
    const signUpPage=poManager.getSignUpPage()
    await signUpPage.goto()
    await signUpPage.clickSignUp(testdata.username +Date.now(),testdata.password)
    console.log("SignUp completed successfully")
    //await page.pause()
    });

test('2 SignUp->EnterData->ClickClose',async({page})=>
    {
    const poManager=new POManager(page)
    const signUpPage=poManager.getSignUpPage()
    await signUpPage.goto()
    await signUpPage.CloseSignUp(testdata.username+Date.now(),testdata.password)
    console.log("SignUp closed successfully")
    //await page.pause()
    })
