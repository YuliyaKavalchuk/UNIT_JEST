import { getFullName, getEmail, getPassword } from "../helpers/Functions";
import { RegistrationFormClass } from "../helpers/RegistrationFormPage";
import {
    expected_Title_Length,
    min_Full_Name_Length,
    email_Separator,
    email_Dot,
    email_Separator_Invalid,
    min_Email_Length,
    min_Password_Length,
    space_Input,
    max_Password_Length,
    valid_Result,
    invalid_Result,
} from "../helpers/expectedResults";

const registrationForm: any = new RegistrationFormClass("Ms", getFullName(), getEmail(), getPassword());

describe("Registration Form", () => {
    //Title
    test("Positive: Check Title is 2 char.", () => {
        expect(registrationForm.title).toHaveLength(expected_Title_Length);
    });
    test("Negative: Check Title is not empty", () => {
        expect(registrationForm.title).not.toBeNull();
    });
    // Full Name
    test("Positive: Check Full Name min 1 char.", () => {
        expect(registrationForm.fullNameInput().length).toBeGreaterThanOrEqual(min_Full_Name_Length);
    });
    test("Negative: Check Full name is not empty", () => {
        expect(registrationForm.fullNameInput()).not.toBeNull();
    });
    //Email
    test("Positive: Check email contain separator @", () => {
        expect(registrationForm.emailInput()).toContain(email_Separator);
    });
    test("Positive: Check email contain .", () => {
        expect(registrationForm.emailInput()).toContain(email_Dot);
    });
    test("Negative: Check email is not empty", () => {
        expect(registrationForm.emailInput()).not.toBeNull();
    });
    test("Positive: Check email more than 3 char.", () => {
        expect(registrationForm.emailInput().length).toBeGreaterThan(min_Email_Length);
    });
    test("Negative: Check email is not contain @@", () => {
        expect(registrationForm.emailInput()).not.toContain(email_Separator_Invalid);
    });
    //Password
    test("Positive: Check password min 6 char.", () => {
        expect(registrationForm.password.length).toBeGreaterThanOrEqual(min_Password_Length);
    });
    test("Negative: Check password not contain Space", () => {
        expect(registrationForm.password).not.toContain(space_Input);
    });
    test("Negative: Check password no longer than 20 char.", () => {
        expect(registrationForm.password.length).not.toBeGreaterThan(max_Password_Length);
    });
    //Confirm password
    test("Positive: Check Confirm password is Valid (equal to password)", () => {
        let passwordAndConfirmedPassword: string = registrationForm.password;
        expect(registrationForm.confirmPasswordInput(passwordAndConfirmedPassword)).toEqual(valid_Result);
    });
    test("Negative: Check Confirm password is Invalid (not equal to password)", () => {
        expect(registrationForm.confirmPasswordInput(getPassword())).toEqual(invalid_Result);
    });
});
