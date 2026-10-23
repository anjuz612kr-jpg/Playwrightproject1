const SignUp=require("./SignUp")
const LoginPage=require("./LoginPage")
const HomePage=require("./HomePage")
const Cart=require ("./Cart")
const Summary=require("./Summary")
class POManager
{
    constructor(page){
        this.page=page
        this.signUpPage=new SignUp(page)
        //this.clickSignUp=new clickSignUp(page)
        this.logging=new LoginPage(page)
        this.homepage=new HomePage(page)
        this.cart=new Cart(page)
        this.summary=new Summary(page)
    }
    getSignUpPage(){
        return this.signUpPage
    }
    getLoginPage(){
        return this.logging
    }
    getHomePage(){ 
        return this.homepage
    }
    getCart(){
        return this.cart
    }
    getSummary(){
        return this.summary
    }

}
module.exports=POManager