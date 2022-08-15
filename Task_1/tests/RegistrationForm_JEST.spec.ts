import { getFullName, getEmail, getPassword } from "../helpers/Functions";
import { RegistrationFormClass } from "../helpers/RegistrationFormPage";
import {
    expectedTitleLength,
    minFullNameLength,
    emailSeparator,
    emailDot,
    emailSeparatorInvalid,
    minEmailLength,
    minPasswordLength,
    spaceInput,
    maxPasswordLength,
    validResult,
    invalidResult,
} from "../helpers/expectedResults";

const registrationForm: any = new RegistrationFormClass("Ms", getFullName(), getEmail(), getPassword());

describe("Registration Form", () => {
    //Title
    test("Positive: Check Title is 2 char.", () => {
        expect(registrationForm.title).toHaveLength(expectedTitleLength);
    });
    test("Negative: Check Title is not empty", () => {
        expect(registrationForm.title).not.toBeNull();
    });
    // Full Name
    test("Positive: Check Full Name min 1 char.", () => {
        expect(registrationForm.fullNameInput().length).toBeGreaterThanOrEqual(minFullNameLength);
    });
    test("Negative: Check Full name is not empty", () => {
        expect(registrationForm.fullNameInput()).not.toBeNull();
    });
    //Email
    test("Positive: Check email contain separator @", () => {
        expect(registrationForm.emailInput()).toContain(emailSeparator);
    });
    test("Positive: Check email contain .", () => {
        expect(registrationForm.emailInput()).toContain(emailDot);
    });
    test("Negative: Check email is not empty", () => {
        expect(registrationForm.emailInput()).not.toBeNull();
    });
    test("Positive: Check email more than 3 char.", () => {
        expect(registrationForm.emailInput().length).toBeGreaterThan(minEmailLength);
    });
    test("Negative: Check email is not contain @@", () => {
        expect(registrationForm.emailInput()).not.toContain(emailSeparatorInvalid);
    });
    //Password
    test("Positive: Check password min 6 char.", () => {
        expect(registrationForm.password.length).toBeGreaterThanOrEqual(minPasswordLength);
    });
    test("Negative: Check password not contain Space", () => {
        expect(registrationForm.password).not.toContain(spaceInput);
    });
    test("Negative: Check password no longer than 20 char.", () => {
        expect(registrationForm.password.length).not.toBeGreaterThan(maxPasswordLength);
    });
    //Confirm password
    test("Positive: Check Confirm password is Valid (equal to password)", () => {
        let passwordAndConfirmedPassword: string = registrationForm.password;
        expect(registrationForm.confirmPasswordInput(passwordAndConfirmedPassword)).toEqual(validResult);
    });
    test("Negative: Check Confirm password is Invalid (not equal to password)", () => {
        expect(registrationForm.confirmPasswordInput(getPassword())).toEqual(invalidResult);
    });
});
