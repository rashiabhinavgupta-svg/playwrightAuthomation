/*import { test, expect } from '@playwright/test'
import { HomePage } from "../pageObject/HomePage";
import { RegistrationPage } from "../pageObject/RegistrationPage";

test('register', async ({ page }) => {
    const homepage = new HomePage(page)
    await homepage.goTo()
    await homepage.clickOnRegisterLink()

    const registerpage = new RegistrationPage(page)
    await registerpage.registerUser('jhon', 'sam',
        'usa', 'texas', '111223', '44222677', '111111', 'js12', 'asdf','1234')
    await registerpage.clickOnRegisterButton()
})*/

import { test, expect } from '@playwright/test'
import { POManager } from '../pageObject/POManager'

test('register', async ({ page }) => {
    const pomanager=new POManager(page)
    const homepage = pomanager.getHomePage()
    await homepage.goTo()
    await homepage.clickOnRegisterLink()

    const registerpage = pomanager.getRegistrationPage()
    await registerpage.registerUser('jhon', 'sam',
        'usa', 'texas', '111223', '44222677', '111111', 'js12', 'asdf','1234')
    await registerpage.clickOnRegisterButton()
})