import { loginpage } from "..\\..\\examples\\pages\\loginpage"

describe("Login with Page Object", () => {  
    it("Login", ()=> {

        loginpage.performLogin(row.userName, row.Password);
    });
        loginpage.clickLogdescribe();

})