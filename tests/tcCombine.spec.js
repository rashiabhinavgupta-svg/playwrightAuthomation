
import { POManager } from '../pageObject/POManager'
import { customtest as test, expect } from '../fixtures/testfixture'


test.describe.serial('combine',()=>
{

test('@sanityregister', async ({ page, testdataForregistration }) => {
    const pomanager = new POManager(page)
    const homepage = pomanager.getHomePage()
    await homepage.goTo()
    await homepage.clickOnRegisterLink()

    const registerpage = pomanager.getRegistrationPage()
    await registerpage.registerUser(
        testdataForregistration.firstname,
        testdataForregistration.lastname,
        testdataForregistration.address,
        testdataForregistration.city,
        testdataForregistration.state,
        testdataForregistration.zipcode,
        testdataForregistration.phonenumber,
        testdataForregistration.ssn,
        testdataForregistration.username,
        testdataForregistration.password,
        testdataForregistration.confirmpassword
    )
    await registerpage.clickOnRegisterButton()
})

test('login@smoke', async ({ page, testdataForregistration }) => {
    const pomanager = new POManager(page)
    const homepage = pomanager.getHomePage()
    await homepage.goTo()
   
     const loginpage=pomanager.getLoginPage()
      await loginpage.loginToApplication(
        testdataForregistration.username,
        testdataForregistration.password
      )
    
      await loginpage.clickOnLoginButton()
})

})
