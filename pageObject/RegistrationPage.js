 export class RegistrationPage
  {
         constructor(page)
         {
             this.page=page
             this.FirstName=page.locator("//input[@id='customer.firstName']")
             this.LastName=page.locator("//input[@id='customer.lastName']")
             this.Address=page.locator("//input[@id='customer.address.street']")
             this.City=page.locator("//input[@id='customer.address.city']")
             this.State=page.locator("//input[@id='customer.address.state']")
             this.ZipCode=page.locator("//input[@id='customer.address.zipCode']")
             this.PhoneNumber=page.locator("//input[@id='customer.address.zipCode']")
             this.Ssn=page.locator("//input[@id='customer.ssn']")
             this.UserName=page.locator("//input[@id='customer.username']")
             this.Password=page.locator("//input[@id='customer.password']")
             this.ConfirmPassword=page.locator("//input[@id='repeatedPassword']")
             this.RegisterButton=page.locator("//input[@value='Register']")
         }

        async registerUser(fname,lname,address,city,state,zipcode,phonenumber,ssn,username,password)
        {
                await this.FirstName.fill(fname)
                await this.LastName.fill(lname)
                await this.Address.fill(address)
                await this.City.fill(city)
                await this.State.fill(state)
                await this.ZipCode.fill(zipcode)
                await this.PhoneNumber.fill(phonenumber)
                await this.Ssn.fill(ssn)
                await this.UserName.fill(username)
                await this.Password.fill(password)
                await this.ConfirmPassword.fill(password)
        }

        async clickOnRegisterButton()
        {
              await this.RegisterButton.click()
        }
  }