import { alphabet, special_Char, email_Template } from "./constantsForFunctions";
import { email_Separator, space_Input } from "./expectedResults";

export function generateRandomLetterLowerCase(): string {
    return alphabet[Math.floor(Math.random() * alphabet.length)];
}

export function generateRandomLetterUpperCase(): string {
    return alphabet.toUpperCase()[Math.floor(Math.random() * alphabet.length)];
}

export function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomString(length: number): string {
    let result: string = space_Input;
    let characters: string = alphabet + alphabet.toUpperCase();
    let charactersLength: number = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export function getEmail(): string {
    let emailSplit: any = email_Template.split(email_Separator);
    return emailSplit[0] + getRandomInt(10000, 99999) + email_Separator + emailSplit[1];
}
export function getPassword(): string {
    let min: number = 0;
    let max: number = 9;
    let rand: number = Math.floor(Math.random() * (max - min + 1)) + min;
    return generateRandomLetterLowerCase() + rand + generateRandomLetterUpperCase() + special_Char;
}

export function getFullName(): string {
    return getRandomString(getRandomInt(1, 14)) + space_Input + getRandomString(getRandomInt(1, 15));
}
