export class RegistrationFormClass {
    constructor(public title: string, public fullName: string, public email: string, public password: string) {
        this.title = title;
        this.fullName = fullName;
        this.email = email;
        this.password = password;
    }
    public fullNameInput(): string {
        return this.fullName;
    }

    public emailInput(): string {
        return this.email;
    }

    public confirmPasswordInput(expectedResult: string) {
        if (this.password === expectedResult) {
            return "Valid";
        } else {
            return "Invalid";
        }
    }
}
