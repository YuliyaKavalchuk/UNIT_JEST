import { fullName, email, password } from "./Functions";
import { registrationFormClass } from "./ClassRegistrationForm";

const registrationForm: any = new registrationFormClass("Ms", fullName(), email(), password());

describe("Registration Form", function () {
    //Title
    test("Positive: Check Title is 2 char.", function () {
        expect(registrationForm.title).toHaveLength(2);
    });
    test("Negative: Check Title is not empty", function () {
        expect(registrationForm.title).not.toBeNull();
    });
    // Full name
    test("Positive: Check Full Name min 1 char.", function () {
        expect(registrationForm.fullNameInput().length).toBeGreaterThanOrEqual(1);
    });
    test("Negative: Check Full name is not empty", function () {
        expect(registrationForm.fullNameInput()).not.toBeNull();
    });
    //Email
    test("Positive: Check email contain separator @", () => {
        expect(registrationForm.emailInput()).toContain("@");
    });
    test("Positive: Check email contain .", () => {
        expect(registrationForm.emailInput()).toContain(".");
    });
    test("Negative: Check email is not empty", () => {
        expect(registrationForm.emailInput()).not.toBeNull();
    });
    test("Positive: Check email more than 5 char.", function () {
        expect(registrationForm.emailInput().length).toBeGreaterThan(5);
    });
    test("Negative: Check email is not contain @@", () => {
        expect(registrationForm.emailInput()).not.toContain("@@");
    });
    //Password
    test("Positive: Check password min 6 char.", function () {
        expect(registrationForm.password.length).toBeGreaterThanOrEqual(6);
    });
    test("Negative: Check password not contain Space", function () {
        expect(registrationForm.password).not.toContain(" ");
    });
    test("Negative: Check password no longer than 20 char.", function () {
        console.log(registrationForm.password);
        expect(registrationForm.password.length).not.toBeGreaterThan(20);
    });
    //Confirm password
    test("Positive: Check Confirm password is Valid (equal to password)", function () {
        let passwordAndConfirmedPassword: any = registrationForm.password;
        expect(registrationForm.confirmPasswordInput(passwordAndConfirmedPassword)).toEqual("Valid");
    });
    test("Negative: Check Confirm password is Invalid (not equal to password)", function () {
        expect(registrationForm.confirmPasswordInput("f2bDAg*3rjB4")).toEqual("Invalid");
    });
});
