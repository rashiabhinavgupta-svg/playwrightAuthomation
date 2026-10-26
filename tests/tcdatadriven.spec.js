import { test, expect } from '@playwright/test'
import { POManager } from '../pageObject/POManager'
import testData from '../utils/data.json' assert {type: 'json'}

for (const data of testData) {
    test(`'register' ${data.username}`, async ({ page }) => {
        const pomanager = new POManager(page)
        const homepage = pomanager.getHomePage()
        await homepage.goTo()
        await homepage.clickOnRegisterLink()

        const registerpage = pomanager.getRegistrationPage()
        await registerpage.registerUser(
            data.firstname,
            data.lastname,
            data.address,
            data.city,
            data.state,
            data.zipcode,
            data.phonenumber,
            data.ssn,
            data.username,
            data.password,
            data.confirmpassword
        )
        await registerpage.clickOnRegisterButton()
    })

}