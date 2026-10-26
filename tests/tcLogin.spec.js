import { POManager } from '../pageObject/POManager'
import { customtest as test, expect } from '../fixtures/testfixture'
test('register', async ({ page, testdataForregistration }) => {
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