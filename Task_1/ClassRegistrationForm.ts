export class registrationFormClass {
    constructor(public title: string, public fullName: string, public email: any, public password: any) {
        this.title = title;
        this.fullName = fullName;
        this.email = email;
        this.password = password;
    }

    public titleInput(expectedResult: string) {
        if (this.title === expectedResult) {
            return "Valid";
        } else {
            return "Invalid";
        }
    }
    public fullNameInput() {
        return this.fullName;
    }

    public emailInput() {
        return this.email;
    }

    public passwordInput() {
        return this.password;
    }
    public confirmPasswordInput(expectedResult: any) {
        if (this.password === expectedResult) {
            return "Valid";
        } else {
            return "Invalid";
        }
    }
}
