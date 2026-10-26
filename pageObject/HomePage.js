 export class HomePage
 {
     constructor(page)
     {
        this.page=page
                //page.locator("//a[normalize-space()='Register']")
          this.registerlink=  page.getByRole('link', { name: 'Register' })
     }

     async goTo()
     {
        await this.page.goto('https://parabank.parasoft.com/parabank/index.htm')
     }

     async clickOnRegisterLink()
     {
         await this.registerlink.click()
     }
 }