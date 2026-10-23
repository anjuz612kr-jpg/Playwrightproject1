const {test } = require("@playwright/test");
const POManager=require("../pages/POManager")
const testdata=JSON.parse(JSON.stringify(require("../Utils/PlaceOrderLogin.json")))


test('3 Verify login with valid credentials',async({page})=>{
    const poManager=new POManager(page)
    const signUpPage=poManager.getSignUpPage()
    const loginPage=poManager.getLoginPage()
    await signUpPage.goto()
    await loginPage.validlogin(testdata.validusername,testdata.validpassword)
    //await page.pause()
});


test('4 Verify login with invalid username and valid password',async({page})=>{
    const poManager=new POManager(page)
    const signUpPage=poManager.getSignUpPage()
    const loginPage=poManager.getLoginPage()
    
    await signUpPage.goto()
    await loginPage.invalidlogin1(testdata.invalidusername,testdata.validpassword)
    //await page.pause()
});

test('5 Verify login with valid username and invalid password',async({page})=>{
    const poManager=new POManager(page)
    const signUpPage=poManager.getSignUpPage()
    const loginPage=poManager.getLoginPage()

    await signUpPage.goto()
    await loginPage.invalidlogin2(testdata.validusername,testdata.invalidpassword)
    //await page.pause()
    });

test('6 Verify login with invalid username and invalid password',async({page})=>{
    const poManager=new POManager(page)
    const signUpPage=poManager.getSignUpPage()
    const loginPage=poManager.getLoginPage()

    await signUpPage.goto()
    await loginPage.invalidloginboth(testdata.invalidusername,testdata.invalidpassword)
    //await page.pause()
});

test('10 Login with valid credentials->Logout',async({page})=>{
    const poManager=new POManager(page)
    const signUpPage=poManager.getSignUpPage()
    const loginPage=poManager.getLoginPage()

    await signUpPage.goto()
    await loginPage.validlogin(testdata.validusername,testdata.validpassword)
    await loginPage.logoutcall()
    //await page.pause()
})
