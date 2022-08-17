import { getFullName, getEmail, getPassword } from "../helpers/Functions";
import { RegistrationFormClass } from "../helpers/RegistrationFormPage";
import {
    EXPECTED_TITLE_LENGTH,
    MIN_FULL_NAME_LENGTH,
    EMAIL_SEPARATOR,
    EMAIL_DOT,
    EMAIL_SEPARATOR_INVALID,
    MIN_EMAIL_LENGTH,
    MIN_PASSWORD_LENGTH,
    SPACE_INPUT,
    MAX_PASSWORD_LENGTH,
    VALID_RESULT,
    INVALID_RESULT,
} from "../helpers/expectedResults";

const registrationForm: any = new RegistrationFormClass("Ms", getFullName(), getEmail(), getPassword());

describe("Registration Form", () => {
    //Title
    test("Positive: Check Title is 2 char.", () => {
        expect(registrationForm.title).toHaveLength(EXPECTED_TITLE_LENGTH);
    });
    test("Negative: Check Title is not empty", () => {
        expect(registrationForm.title).not.toBeNull();
    });
    // Full Name
    test("Positive: Check Full Name min 1 char.", () => {
        expect(registrationForm.fullNameInput().length).toBeGreaterThanOrEqual(MIN_FULL_NAME_LENGTH);
    });
    test("Negative: Check Full name is not empty", () => {
        expect(registrationForm.fullNameInput()).not.toBeNull();
    });
    //Email
    test("Positive: Check email contain separator @", () => {
        expect(registrationForm.emailInput()).toContain(EMAIL_SEPARATOR);
    });
    test("Positive: Check email contain .", () => {
        expect(registrationForm.emailInput()).toContain(EMAIL_DOT);
    });
    test("Negative: Check email is not empty", () => {
        expect(registrationForm.emailInput()).not.toBeNull();
    });
    test("Positive: Check email more than 3 char.", () => {
        expect(registrationForm.emailInput().length).toBeGreaterThan(MIN_EMAIL_LENGTH);
    });
    test("Negative: Check email is not contain @@", () => {
        expect(registrationForm.emailInput()).not.toContain(EMAIL_SEPARATOR_INVALID);
    });
    //Password
    test("Positive: Check password min 6 char.", () => {
        expect(registrationForm.password.length).toBeGreaterThanOrEqual(MIN_PASSWORD_LENGTH);
    });
    test("Negative: Check password not contain Space", () => {
        expect(registrationForm.password).not.toContain(SPACE_INPUT);
    });
    test("Negative: Check password no longer than 20 char.", () => {
        expect(registrationForm.password.length).not.toBeGreaterThan(MAX_PASSWORD_LENGTH);
    });
    //Confirm password
    test("Positive: Check Confirm password is Valid (equal to password)", () => {
        let passwordAndConfirmedPassword: string = registrationForm.password;
        expect(registrationForm.confirmPasswordInput(passwordAndConfirmedPassword)).toEqual(VALID_RESULT);
    });
    test("Negative: Check Confirm password is Invalid (not equal to password)", () => {
        expect(registrationForm.confirmPasswordInput(getPassword())).toEqual(INVALID_RESULT);
    });
});
